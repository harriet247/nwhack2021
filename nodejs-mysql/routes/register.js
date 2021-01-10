const express = require('express');
const router = express.Router();
const registers = require('../services/register');

// todo: change to post request

router.post('/', async function(req, res, next) {
  try {
    res.json(await registers.create(req.body));
  } catch (err) {
    console.error(`Error while getting register `, err.message);
    next(err);
  }
});

module.exports = router;