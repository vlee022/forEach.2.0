/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable camelcase */
const md5 = require('md5');
const bcrypt = require('bcrypt');
const db = require('../models/databaseModel');

const dataBaseController = {};
const saltRounds = 10;

dataBaseController.getDonationList = (req, res, next) => {
  const donationList = 'SELECT f_name, l_name, amount FROM donations ORDER BY donation_date';
  db.query(donationList)
    .then((data) => {
      res.locals.donationsList = data.rows;
      //console.log('this is res.locals:', data.rows);
      return next();
    })
    .catch((err) => {
      console.log('this is an error');
      next(err);
    });
};

dataBaseController.getDonationTotal = (req, res, next) => {
  const allDonations = 'SELECT sum(amount) FROM donations';
  db.query(allDonations)
    .then((data) => {
      res.locals.donationsTotal = data.rows[0].sum;
      // console.log('data.rows', data.rows);
      return next();
    })
    .catch((err) => {
      // console.log('total donation error');
      next(err);
    });
};

dataBaseController.createDonation = (req, res, next) => {
  // destructor request body
  const { amount, f_name, l_name, billing_mm, billing_yy, billing_country,
    billing_zip_code, billing_name_on_card, phone_num, email, anonymous, createUser } = req.body;

  // hash cc_num and ccv
  const billing_cc_num = md5(req.body.billing_cc_num);
  const billing_cvv = md5(req.body.billing_cvv);

  // post donation to DB
  const values = [amount, f_name, l_name, billing_cc_num,
    billing_cvv, billing_mm, billing_yy, billing_country,
    billing_zip_code, billing_name_on_card, phone_num, email];

  const inputDonation = `INSERT INTO donations(amount, f_name, l_name, billing_cc_num, billing_cvv, 
    billing_mm, billing_yy, billing_country, billing_zip_code, billing_name_on_card, phone_num, email) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`;

  db.query(inputDonation, values)
    .then((response) => {
      res.locals.inputDonation = response.rows[0];
      if (createUser) return next();
      return res.status(200).json(res.locals.inputDonation);
    })
    .catch((err) => {
      console.error(err);
      return next(err);
    });
  // SEND BACK ERROR MESSAGE IF EMAIL ALREADY EXISTS AS USERNAME
};

module.exports = dataBaseController;

// {
//   "amount": 200,
//   "f_name": "Kim",
//   "l_name": "Spicer",
//   "billing_cc_num": 1234567899,
//   "billing_cvv": 123,
//   "billing_mm": 11,
//   "billing_yy": 21,
//   "billing_country": "USA",
//   "billing_zip_code": 33433,
//   "billing_name_on_card": "Kim Spicer",
//   "phone_num": 1234567,
//   "email": "kim@gmail.com",
//   "anonymous": false,
//   "createUser": true,
//   "password": "Pw123"
// }

// {
//   "f_name": "Gabriel",
//   "l_name": "Machado",
//   "email": "jane@gmail.com",
//   "password": "Pw123"
// }
