const db = require("../models/databaseModel");

const dataBaseController = {};

dataBaseController.getDonations = (req, res, next) => {
  const allDonations = 'SELECT sum(amount) FROM donations';
  db.query(allDonations)
  .then((data) => {
      res.locals.donations = data.rows;
      console.log(data.rows);
      return next()
  })
  .catch((err) => {
      throw err;
  }); 
};


module.exports = dataBaseController;