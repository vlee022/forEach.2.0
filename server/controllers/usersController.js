const md5 = require('md5');
const bcrypt = require('bcrypt');
const db = require('../models/databaseModel');

const userController = {};
const saltRounds = 10;

userController.createUser = (req, res, next) => {
  const { email, password, f_name, l_name } = req.body;
  // console.log('req.body:', req.body);

  const inputUser = 'INSERT INTO users (user_name, password, f_name, l_name) VALUES ($1, $2, $3, $4) RETURNING *';

  bcrypt.hash(password, saltRounds, ((err, hash) => {
    const values = [email, hash, f_name, l_name]
    //console.log("this is values", values)
    // query DB passing in user_name and password as variables and storing in res.locals
    db.query(inputUser, values)
      .then((data) => {
        res.locals.user = data.rows;
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

// Call middleware after logging in OR sign up is successful 
// Create a cookie named 'ssid' with a value that is equal to the _id of the user
userController.setSSIDCookie = (req, res, next) => {

};

// 1. Create a session database tied to the user_id
// 2. Create a new session row after the user logs in
// 3. A session has a single column of 'email' OR 'user_name'
userController.createSession = (req, res, next) => {

};

// Verify if a user has a cookie with the name "ssid" AND it has an active session.
// If they do, they should be able to access certain pages
userController.isLoggedIn = (req, res, next) => {

};

// OPTIONAL: Remove session from database when 'logged out' is clicked in frontend
userController.removeSession = (req, res, next) =>  {

};

module.exports = userController;