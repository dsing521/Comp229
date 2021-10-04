/*
File name : about.js
Student’s Name : Damandeep Singh
StudentID : 301170650
Date : 10th oct, 2021
*/

var express = require('express');
var router = express.Router();

/*GET about me page*/
router.get('/', function (req, res, next) {
  res.render('about', { title: 'About Me' });
});

module.exports = router;
