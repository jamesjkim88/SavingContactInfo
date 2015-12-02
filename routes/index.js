var express = require('express');
var router = express.Router();
var models = require("../models/models");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(req);
});

router.delete("/contacts/:id", function(req,res){
  models.ContactModel.findByIdAndRemove(req.params.id, req.body, function (err, result) {
    if (err) res.status(500).json({error: err});
    else res.status(200).json({result: "deleted"});
  });
});

router.get('/contacts', function (req, res) {
  models.ContactModel.find(function(err,result){
    if(err) res.result(500).json({message: "something went wrong"});
    else res.status(200).json({result: result});
  });
});

router.post("/contacts", function(req,res){
  console.log(req.body);
  (new models.ContactModel(req.body)).save(function(error,result){
    if(error) res.status(500).json({error: error});
    else res.status(200).json(result);
  });
});

router.put("/contacts/:id", function(req,res){
  models.ContactModel.findByIdAndUpdate(req.params.id, req.body, { new: true },  function (err, result) {
    if (err) res.status(500).json({error: err});
    else res.status(200).json(result);
  });
});

module.exports = router;
