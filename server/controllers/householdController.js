const db = require('../models/freshModel.js');

const householdController = {};

householdController.createHousehold = (req, res, next) => {
  // inserting the householdName provided from request body into household table in DB
  const query = `
    INSERT INTO households (name)
    VALUES ($1)
    RETURNING _id
  `;
  const entries = [req.body.householdName];
  db.query(query, entries, (err, data) => {
    if (err) {
      return next({
        log: `Express error handler caught in createHousehold ERROR: ${err}`,
        message: { err: 'An error occurred in createHousehold' },
      });
    }
    // store newly created householdId in res.locals
    res.locals.householdID = data.rows[0]._id;
    return next();
  });
};

householdController.joinHousehold = (req, res, next) => {
  // adding householdID provided to user table
  // householdId can either come from req.body if user entered an ID from front-end
  // or it can come from req.query if request is coming from createHousehold middleware
  const householdID = req.body.householdID ? req.body.householdID : req.query.householdID;
  const { userID } = req.body;
  const query = `
    UPDATE users
    SET household_id = $1
    WHERE _id = $2
    RETURNING users.*
  `;
  const entries = [householdID, userID];
  db.query(query, entries, (err, data) => {
    if (err) {
      return next({
        log: `Express error handler caught in joinHousehold ERROR: ${err}`,
        message: { err: 'An error occured in joinHousehold' },
      });
    }
    return next();
  });
};

module.exports = householdController;
