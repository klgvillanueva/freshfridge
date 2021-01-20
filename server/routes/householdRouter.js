const express = require('express');
const { joinHousehold, createHousehold } = require('../controllers/householdController.js');

const router = express.router();

router.post('/create',
  createHousehold,
  joinHousehold,
  (req, res) => {

  }
);

router.post('/join',
  joinHousehold,
  (req, res) => {

  }
);

module.exports = router;
