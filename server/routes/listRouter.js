const express = require('express');
const { getList, getUserList, getHouseholdList, addItem, deleteItem, updateItem } = require('../controllers/listController');

const router = express.Router();

// retrieve list on page login
router.get('/', getList, (req, res) => {
  res.status(200).json([...res.locals.items]);
});

// retrieves the list of items in a household given the householdID
router.get('/householdItems/:householdID',
  getHouseholdList,
  (req, res) => {
    res.status(200).json(res.locals.householdItems);
  }
);

// add item to list and retrieve list
router.put('/',
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
