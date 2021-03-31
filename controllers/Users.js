const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { createUserToken } = require('../middleware/auth');
const User = require('../models/User');
// Sign Up Route
router.post('/signup', (req, res, next) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hashedPassword) => {
			const newUser = {
				userName: req.body.userName,
				password: hashedPassword,
			};
			return newUser;
		})
		.then((newUser) => {
			return User.create(newUser);
		})
		.then((user) => {
			// res.json(user) -> 200 status
			res.status(201).json(user);
		})
		.catch(next);
});
router.post('/signin', (req, res, next) => {
	User.findOne({ userName: req.body.userName })
		// Pass the user and the request to createUserToken
		.then((user) => createUserToken(req, user))
		// createUserToken will either throw an error that
		// will be caught by our error handler or send back
		// a token that we'll in turn send to the client.
		.then((token) => res.json({ token }))
		.catch(next);
});
// Sign In Route



module.exports = router;
