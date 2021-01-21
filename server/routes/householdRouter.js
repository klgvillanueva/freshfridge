const express = require('express');
const { joinHousehold, createHousehold } = require('../controllers/householdController.js');

const router = express.Router();

// inserts new household into households table
// then redirects to join household
router.post('/create',
  createHousehold,
  (req, res) => {
    const { householdID } = res.locals;
    return res.redirect(307, `/household/join/?householdID=${householdID}`);
  });

// updates household_ID for given user_ID
// then redirects to getHouseholdItems
router.post('/join',
  joinHousehold,
  (req, res) => {
    const householdID = req.body.householdID ? req.body.householdID : req.query.householdID;
    // const { userID } = req.body;
    // return res.redirect(`/lists/householdItems/householdID/${householdID}/userID/${userID}`);
    return res.redirect(`/lists/householdItems/${householdID}`);
  }
);

module.exports = router;
