const router = require('express').Router();
const { Profile, Exercise, ExerciseLog } = require('./models/gains.model');

// APIs 

// Users all
router.get('/users', function(req, res) {
  Profile.find({}, function(err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  });
});

// create
router.post('/add_user', function(req, res) {
  var obj = new Profile(req.body);
  obj.save(function(err, obj) {
    if (err) return console.error(err);
    res.status(200).json(obj);
  });
});

// find by id
app.get('/user/:id', function (req, res) {
  Profile.findOne({ _id: req.params.id }, function (err, obj) {
    if (err) return console.error(err);
    res.json(obj);
  });
});

// update by id
router.put('/user/:id', function (req, res) {
  Profile.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

// delete by id
router.delete('/user/:id', function (req, res) {
  Profile.findOneAndRemove({ _id: req.params.id }, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

// Exercises

// exercise all
router.get('/exercises', (function(req, res) {
  Profile.find({}, (function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  }));
}));

// create
router.post('/add_exercise', function (req, res) {
  var obj = new Cat(req.body);
  obj.save(function (err, obj) {
    if (err) return console.error(err);
    res.status(200).json(obj);
  });
});

// find by id
app.get('/exercise/:id', function (req, res) {
  Cat.findOne({ _id: req.params.id }, function (err, obj) {
    if (err) return console.error(err);
    res.json(obj);
  })
});

// update by id
router.put('/exercise/:id', function (req, res) {
  Cat.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  })
});

// delete by id
router.delete('/exercise/:id', function (req, res) {
  Cat.findOneAndRemove({ _id: req.params.id }, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});
