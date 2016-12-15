var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  return knex('user')
  .where('id', req.params.id)
  .first()
  .then(user =>{
    res.json(user);
  })
});

module.exports = router;
