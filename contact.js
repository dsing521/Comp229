/*
File name : contact.js
Student’s Name : Damandeep Singh
StudentID : 301170650
Date : 10th oct, 2021
*/
var express = require('express');
var router = express.Router();

/*GET contact me page*/
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
