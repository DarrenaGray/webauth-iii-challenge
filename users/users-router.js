const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
	Users.getUsers()
		.then(users => {
			if (users.length !== 0) {
				res.status(200).json(users);
			} else {
				res.status(404).json({ message: 'There are no users here.' });
			}
		})
		.catch(err => {
			res.status(500).json({
				err,
				message: 'There was a problem retrieving the users.'
			});
		});
});

module.exports = router;
