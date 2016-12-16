var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/user/:id', (req, res, next) => {
  if(!isNaN(req.params.id)){
    return knex('user')
    .where('id', req.params.id)
    .first()
    .then(user =>{
      if(user){
        delete user.password;
        res.json(user);
      } else {
        res.status(404)
        res.json({
          message: 'You done fucked it.'
        })
      }

    })
  } else {
    res.status(500)
    res.json({
      message: 'Foff'
    })
  }

});

router.get('/user/:id/sticker', (req, res) => {
  if (!isNaN(req.params.id)) {
    knex('sticker').where('user_id', req.params.id).then(sticker =>{
      if (sticker.length > 0) {
        res.json(sticker)
      } else {
        res.status(404)
        res.json({
          message: 'No stickers here!'
        })
      }

    })
  } else {
    res.status(500);
    res.json({
      message: 'Foff!'
    })
  }

})





module.exports = router;
