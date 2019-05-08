const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users
        .addUser(user)
        .then(regUser => {
            res.status(201).json({ regUser, message: "The user was registered successfully!" });
        })
        .catch(err => {
            res.status(500).json({ err, message: "There was a problem registering the user." });
        });
});

module.exports = router;