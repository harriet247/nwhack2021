//post
const express = require('express');
const router = express.Router();
const logins = require('../services/login');


router.get('/', async function(req, res, next) {
    try {
      res.json(await logins.getMultiple());
    } catch (err) {
      console.error(`Error while getting quotes `, err.message);
      next(err);
    }
  });

module.exports = router;