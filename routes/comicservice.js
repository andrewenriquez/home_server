var express = require('express');
fs = require('fs');
xml2js = require('xml2js');
const decompress = require('decompress');


var router = express.Router();
var { Todos } = require('../models/todos');
var parser = new xml2js.Parser();
/* GET home page. */
router.get('/', async function(req, res, next) {
  const todoss =  await Todos.find();
  // {description: going to the gym, complete: true}
  res.render('index', { title: 'Todos:', todos: todoss });
});

router.get('/xml2js', async function(req, res, next) {
  console.log("/xml2js router working");

});

router.get('/decompress', async function(req, res, next) {
  console.log("/decompress router working");

});
module.exports = router;

