const db = require('../models/freshModel.js');

const listController = {
  getList(req, res, next) {
    const query = `
      SELECT 
    `;
    db.query('SELECT * FROM users', (err, data) => {
      console.log('this is the full list of items: ', data);
      return next();
    });
  },
  // Sign-up - Add to users table
  // Login - Query users table to confirm name & password, return user_id & household_id (if any)
  /* getList - Query items table & return items associated w user
     (_id, names, priority, shared?, location) */
  getUserList(req, res, next) {
    // console.log("here is what getList is getting: ", req.body)
    if (!res.locals.userID) {
      res.locals.userID = req.body.userID ? req.body.userID : req.params.userID;
    }
    const query = `
      SELECT u._id as "userID",
              u.first_name as "firstName",
              json_agg(json_build_object('itemId', i._id,
                        'itemName', i.name,
                        'priority', i.priority,
                        'shared', i.shared,
                        'fridge', i.fridge,
                        'grocery', i.grocery,
                        'itemUserId', u2._id,
                        'itemFirstName', u2.first_name)) as "userItems"
              FROM users u
              JOIN items i 
              ON u._id = i.user_id
              JOIN users u2 
              ON i.user_id = u2._id
              WHERE u._id = $1
              GROUP BY u._id, u.first_name;
    `;
    // will userId be in cookies?
    db.query(query, [res.locals.userID], (err, data) => {
      if (err) {
        return next({
          log: `Express error handler caught in getUserList ERROR: ${err}`,
          message: { err: 'An error occurred in getList' },
        });
      }
      // console.log('Result of getList query: ', data.rows);
      console.log('user list: ', data);
      if (data.rows.length) {
        res.locals.userItems = data.rows[0].userItems;
      } else {
        res.locals.userItems = [];
      }
      return next();
    });
  },

  getHouseholdList(req, res, next) {
    // householdId can come from either the body, if requested straight from the front end
    // or from req.query if coming from middleware (i.e. joinHousehold)
    // const householdID = req.params.householdID ? req.params.householdID : req.query.householdID;
    if (!res.locals.householdID) {
      res.locals.householdID = req.body.householdID ? req.body.householdID : req.params.householdID;
    }
    const query = `
      SELECT h._id as "householdID", 
      h.name as "householdName",
      json_agg(json_build_object('itemID', i._id,
              'itemName', i.name,
              'priority', i.priority,
              'shared', i.shared,
              'fridge', i.fridge,
              'grocery', i.grocery,
              'userID', u._id,
              'userFirstName', u.first_name)) as "householdItems"
      FROM households h 
      JOIN items i 
      ON h._id = i.household_id
      AND i.shared = true
      JOIN users u
      ON i.user_id = u._id
      WHERE h._id = $1
      GROUP BY h._id, 
      h.name;
    `;
    db.query(query, [res.locals.householdID], (err, data) => {
      if (err) {
        return next({
          log: `Express error handler caught in getHouseholdList ERROR: ${err}`,
          message: { err: 'An error occurred in getHouseholdLIst' },
        });
      }
      if (data.rows.length) {
        res.locals.householdItems = data.rows[0].householdItems;
      } else {
        res.locals.householdItems = [];
      }
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
      req.body.userId,
      req.body.householdId,
    ];
    db.query(query, entries, (err, data) => {
      if (err) {
        return next({
          log: `Express error handler caught in addItem ERROR: ${err}`,
          message: { err: 'An error occurred in addItem' },
        });
      }
      console.log('Result of addItem query: ', data);
      return next();
    });
  },

  // deleteItem - Delete from items table based on item_id.... next getList
  deleteItem(req, res, next) {
    const query = `
      DELETE FROM items
      WHERE _id = $1
      RETURNING user_id, household_id
    `;
    const itemID = [req.body.itemID];
    db.query(query, itemID, (err, data) => {
      if (err) {
        return next({
          log: `deleteItem ERROR: ${err}`,
          message: { err: 'An error occurred in deleteItem' },
        });
      }
      res.locals.userID = data.rows[0].user_id;
      res.locals.householdID = data.rows[0].household_id;
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
      RETURNING user_id, household_id
    `;
    const entries = [
      req.body.itemID,
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
      console.log('Result of updateItem query: ', data);
      res.locals.userID = data.rows[0].user_id;
      res.locals.householdID = data.rows[0].household_id;
      return next();
    });
  },
};

module.exports = listController;
