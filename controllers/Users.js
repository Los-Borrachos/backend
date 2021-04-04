const express = require('express');
const bcrypt = require('bcrypt');
const { createUserToken } = require('../middleware/auth');
const User = require('../models/User');
const {
	handleValidateId,
	handleRecordExists,
} = require('../middleware/custom_errors');
const router = express.Router();

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
			
			res.status(201).json(user);
		})
		.catch(next);
});
router.post('/signin', (req, res, next) => {
	User.findOne({ userName: req.body.userName })
		
		.then((user) => createUserToken(req, user))
		
		.then((token) => {
			 res.json({ token })
		
		})
		.catch(next);
});


router.get('/', (req, res, next) => {
  
  User.find()
    .then((users) => res.json(users))
    .catch(next);
});
//show one
router.get('/:id', handleValidateId, (req, res, next) => {
	User.findById(req.params.id)
	.then(handleRecordExists)
		.then((record) => {
			
				res.json(record);
			
		})
		.catch(next);
});

router.put('/:id', handleValidateId,(req, res, next) => {
	User.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	})
		.then(handleRecordExists)
		.then((record) => {
			
				res.json(record);
			
		})
		.catch(next);
});


router.delete('/:id',handleValidateId, (req, res) => {
	User.findOneAndDelete({
		_id: req.params.id,
	})
	.then(handleRecordExists)
	.then((record) => {
		
			res.sendStatus(204);
		
	})
	.catch(next)
});


module.exports = router;
