var express = require('express');
var router = express.Router();
var Contact = require('../models/email')

var api_key = process.env.MAILGUN_API;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

router.post('/addContact', function(req, res, next){
  Contact.create(req.body, function(err, email){
    res.status(err ? 400 : 200).send(err || email)
  })
});

router.get('/contacts', function(req, res, next){
  Contact.find({}, function(err, emails) {
    res.status(err ? 400 : 200).send(err || emails);
  });
})

router.delete('/removeContact/:id', function(req, res, next){
  Contact.findByIdAndRemove(req.params.id, function(err, email){
    if (err || !email){
      res.satus(400).send("error")
    }
    else{
      res.send("email id" +req.params.id+ "deleted")
    }
  })
})

router.post('/send', function(req, res, next){
  var data = {
    from: req.body.sender,
    to: req.body.receiver,
    subject: req.body.subject,
    text: req.body.body
  };

  mailgun.messages().send(data, function (error, body) {
    if(error){
      res.send('error')
    }
    else{
      console.log(body);
      res.send(body)
    }
  })

})

function sendContact(data){
  mailgun.messages().send(data, function (error, body) {
    if(error){
    }
    else{
      console.log(body);
    }
  })
}

module.exports = router;
