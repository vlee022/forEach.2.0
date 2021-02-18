/* eslint-disable prefer-destructuring */
const md5 = require('md5');
const bcrypt = require('bcrypt');
const db = require('../models/databaseModel');

const userController = {};
const saltRounds = 10;

userController.createUser = (req, res, next) => {
  const { email, password, f_name, l_name } = req.body;
  res.locals.email = email;

  // console.log('req.body:', req.body);

  const inputUser = 'INSERT INTO users (user_name, password, f_name, l_name) VALUES ($1, $2, $3, $4) RETURNING *';

  bcrypt.hash(password, saltRounds, ((err, hash) => {
    const values = [email, hash, f_name, l_name]
    //console.log("this is values", values)
    // query DB passing in user_name and password as variables and storing in res.locals
    db.query(inputUser, values)
      .then((data) => {
        res.locals.user = data.rows[0];
        return next();
      })
      .catch((err) => next({
        log: 'Error in userController.createUser: Failed to create user',
        status: 400,
        message: { err: 'Unable to create user in database' },
      }));
  }));
};

// login controller
userController.login = (req, res, next) => {
  const { email, password } = req.body;
  res.locals.email = email;
  const values = [email];
  const checkUser = 'SELECT user_name, password FROM users WHERE user_name = $1';
  db.query(checkUser, values)
    .then((data) => {
      const hash = data.rows[0].password; // get the password to use it inside the function
      // check if the hashed value inputted in password field matches the value stored in database
      bcrypt.compare(password, hash, ((err, results) => {
        if (results) return next();
        return res.status(404).send('Wrong password');
      }));
    })
    .catch((err) => next({
      log: 'Error in userController.login: Failed to find user',
      status: 400,
      message: { err: 'No user found in database' },
    }));
};

userController.linkUser = (req, res, next) => {
  const userID = res.locals.user._id;
  const donationID = res.locals.inputDonation._id;

  const query = 'UPDATE donations SET user_id = $1 WHERE _id = $2;';

  db.query(query, [userID, donationID])
    .then(() => next())
    .catch(err => next({
      log: 'Error in userController.linkUser',
      status: 400,
      message: { err },
    }));
};

userController.accountDetails = (req, res, next) => {
// Query SQL database for '_id, f_name, l_name, '
  const id = req.params.userID;

  const userQuery = 'SELECT _id, f_name, l_name, user_name FROM users WHERE _id = $1;';
  res.locals.accountDetails = {};
  
  db.query(userQuery, [id])
    .then((data) => {
      res.locals.accountDetails.user = data.rows[0];
      console.log("accountDetails.user", res.locals.accountDetails);
    })
    .catch((err) => next(err));

  const donationsQuery = 'SELECT amount, donation_date FROM donations WHERE user_id = $1';
  db.query(donationsQuery, [id])
    .then((data) => {
      res.locals.accountDetails.donations = data.rows;
      console.log('accountDetails.donations:', res.locals.accountDetails);
    })
    .catch((err) => next(err));

  const shoutoutsQuery = 'SELECT shoutout, claps_count FROM shoutouts WHERE user_id = $1';
  db.query(shoutoutsQuery, [id])
    .then((data) => {
      res.locals.accountDetails.shoutouts = data.rows;
      console.log('accountDetails.shoutouts:', res.locals.accountDetails);
      return next();
    })
    .catch((err) => next(err));
};

// Call middleware after logging in OR sign up is successful 
// Create a cookie named 'ssid' with a value that is equal to the _id of the user
userController.setSSIDCookie = async (req, res, next) => {

  const idFromUsers = 'SELECT _id FROM users WHERE user_name = $1';

  await db.query(idFromUsers, [res.locals.email])
    .then((data) => {
      res.locals.userId = data.rows[0]._id; 
    })
    .catch((err) => next(err));

  res.cookie('ssid', res.locals.userId, {
    httpOnly: true,
  });

  return next();

};

// 1. Create a session database tied to the user_id
// 2. Create a new session row after the user logs in
// 3. A session has a single column of user_id
userController.startSession = (req, res, next) => {

};

// Verify if a user has a cookie with the name "ssid" AND it has an active session.
// If they do, they should be able to access certain pages
userController.isLoggedIn = (req, res, next) => {

};

// OPTIONAL: Remove session from database when 'logged out' is clicked in frontend
userController.removeSession = (req, res, next) => {

};

module.exports = userController;

// const json = {
//   user: {
//     _id: 1,
//     f_name: 'Kim',
//     l_name: 'Spicer',
//     email: 'kim@gmail.com',
//   },
//   donations: [
//     {
//       amount: 100,
//       donation_date: '2021-02-20',
//     },
//     {
//       amount: 80,
//       donation_date: '2020-01-20',
//     },
//   ],
//   shoutouts: [
//     {
//       shoutout: 'cohort 30 <3',
//       claps_count: 5,
//     },
//   ],
// };