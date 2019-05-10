const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');
const secrets = require('../config/secrets');

router.post('/register', (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10);
	user.password = hash;

	Users.addUser(user)
		.then(regUser => {
			const token = generateToken(user);
			res.status(201).json({
				regUser,
				message: 'The user was registered successfully!',
				token
			});
		})
		.catch(err => {
			res.status(500).json({
				err,
				message: 'There was a problem registering the user.'
			});
		});
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;
	Users.getUserBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = generateToken(user);
				res
					.status(200)
					.json({ message: `Welcome, ${user.username}`, token });
			} else {
				res.status(401).json({ message: 'Invalid Credentials.' });
			}
		})
		.catch(err => {
			res
				.status(500)
				.json({ err, message: 'There was a problem logging in.' });
		});
});

function generateToken(user) {
	const payload = {
		subject: user.id,
		username: user.username,
		password: user.password
	};
	const options = {
		expiresIn: '30min'
	};

	return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
