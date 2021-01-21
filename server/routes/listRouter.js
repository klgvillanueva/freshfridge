const express = require('express');
const { getList, getUserList, getHouseholdList, addItem, deleteItem, updateItem } = require('../controllers/listController');
const { isLoggedIn } = require('../controllers/authController.js');
const router = express.Router();

// retrieve list on page login
router.get('/', getList, (req, res) => {
  res.status(200).json([...res.locals.items]);
});

// retrieves the list of items in a household given the householdID
router.get('/householdItems/:householdID',
  isLoggedIn,
  getHouseholdList,
  (req, res) => {
    res.status(200).json({
      householdID: res.locals.householdID,
      householdName: res.locals.householdName,
      householdItems: res.locals.householdItems,
    });
  }
);

// retrieves the list of items for a user given the userID
router.get('/userItems/:userID',
  isLoggedIn,
  getUserList,
  (req, res) => {
    res.status(200).json({
      userItems: res.locals.userItems,
    })
  }
);
// add item to list and retrieve list
router.post('/',
  isLoggedIn,
  addItem,
  getUserList,
  getHouseholdList,
  (req, res) => {
    res.status(200).json({
      userItems: res.locals.userItems,
      householdItems: res.locals.householdItems,
    });
  }
);

//remove item from list and retrieve list
router.delete('/',
  isLoggedIn,
  deleteItem,
  getUserList,
  getHouseholdList,
  (req, res) => {
    res.status(200).json({
      userItems: [...res.locals.userItems],
      householdItems: [...res.locals.householdItems],
    });
  }
)

//move item from one list to another and retrieve list
router.patch('/',
  isLoggedIn,
  updateItem,
  getUserList,
  getHouseholdList,
  (req, res) => {
    res.status(200).json({
      userItems: [...res.locals.userItems],
      householdItems: [...res.locals.householdItems],
    });
  }
);

module.exports = router;
