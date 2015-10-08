var express = require('express');
var router = express.Router();
var Email = require('../models/email')

router.post('/addContact', function(req, res, next){
  Email.create(req.body, function(err, email){
    res.status(err ? 400 : 200).send(err || email)
  })
});

router.get('/contacts', function(req, res, next){
  Email.find({}, function(err, emails) {
    console.log(emails);
    res.status(err ? 400 : 200).send(err || emails);
  });
})

router.delete('/removeContact/:id', function(req, res, next){
  Email.findByIdAndRemove(req.params.id, function(err, email){
    if (err || !email){
      res.satus(400).send("error")
    }
    else{
      console.log(email);
      res.send("email id" +req.params.id+ "deleted")
    }
  })
})

module.exports = router;
