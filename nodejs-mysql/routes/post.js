const express = require('express');
const router = express.Router();
const posts = require('../services/post');


router.post('/', async function(req, res, next) {
  try {
    res.json(await posts.create(req.body));
  } catch (err) {
    console.error(`Error while getting register `, err.message);
    next(err);
  }
});

module.exports = router;