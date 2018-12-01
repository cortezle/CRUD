var express = require('express');
var router = express.Router();
var Task = require('../models/task');


/* GET home page. */
router.get('/', async function(req, res, next) {
  var tasks = await Task.find();
  res.render('index',{ title: 'myFirstApp' });

});

router.post('/add',async (req,res)=>{
  var task = new Task(req.body);
  await task.save();
  res.send('recibido');
});
module.exports = router;
