var express = require('express');
var router = express.Router();
var Email = require('../models/email')

/* GET home page. */


router.post('/addContact', function(req, res, next){
  Email.create(req.body, function(err, email){
    res.status(err ? 400 : 200).send(err || email)
  })
});

router.get('/contacts', function(req, res, next){
  Email.find({}, function(err, emails) {
    res.status(err ? 400 : 200).send(err || emails);
  });
})

module.exports = router;
