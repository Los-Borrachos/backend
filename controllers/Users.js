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

// GET api/jobs
router.get('/', (req, res, next) => {
  // Use our Job model to find all of the documents
  // in the jobs collection
  // Then send all of the jobs back as json
  User.find()
    .then((users) => res.json(users))
    .catch(next);
});
//show one
router.get('/:id', (req, res, next) => {
	User.findById(req.params.id)
		.then((record) => {
			if (!record) {
				res.sendStatus(404);
			} else {
				res.json(record);
			}
		})
		.catch(next);
});
// update login 
router.put('/:id', (req, res, next) => {
	User.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	})
		.then((record) => {
			if (!record) {
				res.sendStatus(404);
			} else {
				res.json(record);
			}
		})
		.catch(next);
});

// delete a user 
router.delete('/:id', (req, res) => {
	User.findOneAndDelete({
		_id: req.params.id,
	}).then((record) => {
		// If we didn't get a job back from the query
		if (!record) {
			// send a 404
			res.sendStatus(404);
		} else {
			// otherwise, send back 204 No Content
			res.sendStatus(204);
		}
	});
});


module.exports = router;
