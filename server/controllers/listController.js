const db = require('../models/freshModel.js');

const listController = {
  // Sign-up - Add to users table
  // Login - Query users table to confirm name & password, return user_id & household_id (if any)
  /* getList - Query items table & return items associated w user
     (_id, names, priority, shared?, location) */
  getUserList(req, res, next) {
    // console.log("here is what getList is getting: ", req.body)
    const query = `
      SELECT *
      FROM items
      WHERE user_id = $1
    `;
    // will userId be in cookies?
    db.query(query, [req.cookies.userId], (err, data) => {
      if (err) {
        return next({
          log: `Express error handler caught in getUserList ERROR: ${err}`,
          message: { err: 'An error occurred in getList' }
        });
      }
      // console.log('Result of getList query: ', data.rows);
      console.log('user list: ', data);
      res.locals.items = data.rows;
      return next();
    });
  },

  getHouseholdList(req, res, next) {
    const query = `
      SELECT *
      FROM items
      WHERE household_id = $1
    `;
    db.query(query, [req.householdId], (err, data) => {
      if (err) {
        return next({
          log: `Express error handler caught in getHouseholdList ERROR: ${err}`,
          message: { err: 'An error occurred in getHouseholdLIst' }
        });
      }
      console.log('household list: ', data);
      res.locals.householdList = data.rows;
      return next();
    });
  },

  // addItem - Insert into items table based on
  // userid, priority, shared, location... next getList
  addItem(req, res, next) {
    // console.log('Request Body: ', req.body);
    const query = `
      INSERT INTO items (name, priority, shared, fridge, grocery, user_id, household_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const entries = [
      req.body.name,
      req.body.priority,
      req.body.shared,
      req.body.fridge,
      req.body.grocery,
      // will userId be in cookies or req body?
      req.cookies.userId,
      req.body.householdId,
    ];
    db.query(query, entries, (err, data) => {
      if (err) {
        return next({
          log: `Express error handler caught in addItem ERROR: ${err}`,
          message: { err: 'An error occurred in addItem' },
        });
      }
      // console.log('Result of addItem query: ', data);
      return next();
    });
  },

  // deleteItem - Delete from items table based on item_id.... next getList
  deleteItem(req, res, next) {
    const query = `
      DELETE FROM items
      WHERE _id = $1
    `;
    const itemId = [req.body.itemId];
    db.query(query, itemId, (err, data) => {
      if (err) {
        return next({
          log: `deleteItem ERROR: ${err}`,
          message: { err: 'An error occurred in deleteItem' },
        });
      }
      // console.log('Result of deleteItem query: ', data);
      return next();
    });
  },

  // updateItem - based on column to update & new value, item_id.... next getList
  updateItem(req, res, next) {
    console.log('updateItem request: ', req.body);
    const query = `
      UPDATE items
      SET fridge = $2, grocery = $3, shared = $4
      WHERE _id = $1
    `;
    const entries = [
      req.body.itemId,
      req.body.fridge,
      req.body.grocery,
      req.body.shared,
    ];
    db.query(query, entries, (err, data) => {
      if (err) {
        return next({
          log: `Express error handler caught in updateItem ERROR: ${err}`,
          message: { err: 'An error occurred in updateItem' },
        });
      }
      // console.log('Result of updateItem query: ', data);
      return next();
    });
  },
};

module.exports = listController;
