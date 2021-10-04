/*
File name : index.js
Student’s Name : Damandeep Singh
StudentID : 301170650
Date : 10th oct, 2021
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

module.exports = router;
