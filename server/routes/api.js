const express = require('express');
const path = require('path');
const router = express.Router();
const donationsController = require('../controllers/donationsController.js');
const userController = require('../controllers/usersController');
const shoutoutsController = require('../controllers/shoutoutsController');

router.get('/donations', donationsController.getDonationList, (req, res) => {
  res.status(200).json(res.locals.donationsList);
});

router.get('/donations/total', donationsController.getDonationTotal, (req, res) => {
  res.status(200).json(res.locals.donationsTotal);
});

router.post('/donations', donationsController.createDonation, userController.createUser, (req, res) => {
  res.status(200).json({ success: true, message: 'Donation and user created', donation: res.locals.inputDonation });
});

router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json({ success: true, message: 'User created', user: res.locals.user });
});

router.post('/login', userController.login, (req, res) => {
  res.status(200).json({ success: true, message: 'Logged in!' });
});

router.get('/shoutouts', shoutoutsController.getShoutouts, (req, res) => {
  res.status(200).json(res.locals.shouts);
});

router.post('/shoutouts', shoutoutsController.createShoutout, (req, res) => {
  res.status(200).json(res.locals.newShoutout);
});

router.post('/incrementclaps', shoutoutsController.incrementClaps, (req, res) => {
  res.status(200).json(res.locals.claps);
});

router.get('/accountDetails/:userID', userController.accountDetails, (req, res)=>{
  res.status(200).json(res.locals.accountDetails);
});

module.exports = router;
