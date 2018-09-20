const express = require('express');
const router = express.Router();
//const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Client = require('../models/Clients');
const nodemailer = require('nodemailer');

//create token
router.get('/token',(req, res) =>{
    res.json({'tokenCreated':true});
});

router.get('/', function(req, res) {
    Client.find().sort({submitted_date:'asc'}).exec(function (err, clients) {
     if (err) return next(err);
      res.json(clients);
    });   
  });

//Save junkgo client details
router.post('/save', function(req, res, next) {
    Client.create(req.body, function (err, post) {
      if (err) return next(err);
      console.log("saving" + JSON.stringify(req.body));
      res.json(post);
    });
});

//Email Client
router.post('/sendmail', function(req, res) {
    console.log('loading request body '+ JSON.stringify(req.body));
    console.log('request data '+ req.body.email);
    nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          service:'gmail',
          //port: 587,
         // true for 465, false for other ports
          auth: {
              user: 'junkgobutler@gmail.com', // generated ethereal user
              pass: 'Z0me6_Ghana' // generated ethereal password
          },
           tls: {
            rejectUnauthorized: false
        }
      });    
      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Junkgobutler" <junkgobutler@gmail.com>', // sender address
          to: req.body.email+','+'junkgobutler@gmail.com', // list of receivers
          subject: 'Your Appointment has been booked', // Subject line
          text: 'Thank you for your business', // plain text body
          html: '<h2>Congratulations Appointment Booked:</h2>'+
          '<p>Please see below for details</p>'+
          '<p>Testing testing</p>'
      };   
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return res.json({success:false,msg:'something went wrong'});
          }else{
            res.json({msg:'email sent',success:true});
          }
         
      });
});
    
});

module.exports.customers = router;