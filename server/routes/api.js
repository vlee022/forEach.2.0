const express = require('express');
const path = require('path');
const router = express.Router();
const dataBaseController = require('../controllers/donationsController.js');

router.get('/donations', dataBaseController.getDonationList, (req, res) => {
  res.status(200).json(res.locals.donationsList);
});

router.get('/donations/total', dataBaseController.getDonationTotal, (req, res) => {
  res.status(200).json(res.locals.donationsTotal);
});

router.post('/donations', dataBaseController.createDonation, (req, res) => {
  res.status(200).json(res.locals.inputDonation);
});

module.exports = router;
