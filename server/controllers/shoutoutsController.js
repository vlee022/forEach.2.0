const db = require('../models/databaseModel');

const shoutoutsController = {};

// shoutouts GET controller
shoutoutsController.getShoutouts = (req, res, next) => {
  const shouts = 'SELECT shoutouts._id, f_name, l_name, shoutout, claps_count FROM shoutouts INNER JOIN users ON shoutouts.user_id = users._id';
  db.query(shouts)
    .then((data) => {
      res.locals.shouts = data.rows;
      // console.log('this is res.locals:', data.rows);
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error in shoutoutsController.getShoutouts: Failed to retrieve shoutout from database',
        status: 400,
        message: { err: 'Failed to retrieve shoutouts' },
      });
    });
};

// shoutouts POST controller
shoutoutsController.createShoutout = (req, res, next) => {
  const { shoutout } = req.body;
  const userID = 1;
  // Grab user information from cookie session
  // When creating a cookie, pass in the user_ID (primary key of users table) as a property

  const shoutoutQuery = 'INSERT INTO shoutouts (shoutout, user_ID) VALUES ($1, $2) RETURNING *';
  db.query(shoutoutQuery, [shoutout, userID])
    .then((data) => {
      res.locals.newShoutout = data.rows;
      return next();
    })
    .catch((err) => next({
      log: 'Error in shoutoutsController.createShoutout: Failed to add shoutout to database',
      status: 400,
      message: { err: 'Failed to create a shoutout' },
    }));
};

shoutoutsController.incrementClaps = (req, res, next) => {
  const { id } = req.body;
  const query = 'UPDATE shoutouts SET claps_count = claps_count + 1 WHERE _id = $1;';

  db.query(query, [id])
    .then(() => next())
    .catch(err => next({
      log: 'Error in shoutoutsController.incrementClaps',
      status: 400,
      message: { err },
    }));
};

module.exports = shoutoutsController;
