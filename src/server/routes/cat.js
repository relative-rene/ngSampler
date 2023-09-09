const app = require('express')();
var Cat = require('../models/cat.model');

// APIs
// select all
app.get('/cats', function (req, res) {
  Cat.find({}, function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  });
});

// count all
app.get('/cats/count', function (req, res) {
  Cat.count(function (err, count) {
    if (err) return console.error(err);
    res.json(count);
  });
});

// create
app.post('/cat', function (req, res) {
  var obj = new Cat(req.body);
  obj.save(function (err, obj) {
    if (err) return console.error(err);
    res.status(200).json(obj);
  });
});

// find by id
app.get('/cat/:id', function (req, res) {
  Cat.findOne({ _id: req.params.id }, function (err, obj) {
    if (err) return console.error(err);
    res.json(obj);
  })
});

// update by id
app.put('/cat/:id', function (req, res) {
  Cat.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  })
});

// delete by id
app.delete('/cat/:id', function (req, res) {
  Cat.findOneAndRemove({ _id: req.params.id }, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});
