const db = require('../models/freshModel.js');

const householdController = {};

householdController.createHousehold = (req, res, next) => {
  // inserting the householdName provided from request body into household table in DB
  const query = `
    INSERT INTO households (name)
    VALUES ($1)
  `;
  const entries = [req.body.householdName];
  db.query(query, entries, (err, data) => {
    if (err) {
      return next({
        log: `Express error handler caught in createHousehold ERROR: ${err}`,
        message: { err: 'An error occurred in createHousehold' },
      });
    }
    console.log('data in create house: ', data);
    // res.locals.householdId = data._id;
    return next();
  });
};

householdController.joinHousehold = (req, res, next) => {
  // adding householdID provided to user table
  const { householdId } = res.locals;
  const { userId } = req.body.userId;
  const query = `
    UPDATE users
    SET household_id = $1
    WHERE _id = $2
  `;
  const entries = [householdId, userId];
  db.query(query, entries, (err, data) => {
    if (err) {
      return next({
        log: `Express error handler caught in joinHousehold ERROR: ${err}`,
        message: { err: 'An error occured in joinHousehold' },
      });
    }
    console.log('data in join house: ', data);
    return next();
  });
};

module.exports = householdController;
