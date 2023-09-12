const router = require('express').Router();
const { Profile, Exercise, ExerciseLog } = require('../models/gains.model');

// APIs 

// Profile all
router.get('/users', function (req, res) {
  Profile.find({}, function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  });
});

// create
router.post('/add_user', function (req, res) {
  var obj = new Profile(req.body);
  obj.save(function (err, obj) {
    if (err) return console.error(err);
    res.status(200).json(obj);
  });
});

// find by id
router.get('/user/:id', function (req, res) {
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
router.get('/exercises', (function (req, res) {
  Exercise.find({}, (function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  }));
}));

// create
router.post('/add_exercise', function (req, res) {
  var obj = new Exercise(req.body);
  obj.save(function (err, obj) {
    if (err) return console.error(err);
    res.status(200).json(obj);
  });
});

// find by id
router.get('/exercise/:id', function (req, res) {
  Exercise.findOne({ _id: req.params.id }, function (err, obj) {
    if (err) return console.error(err);
    res.json(obj);
  })
});

// update by id
router.put('/exercise/:id', function (req, res) {
  Exercise.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  })
});

// delete by id
router.delete('/exercise/:id', function (req, res) {
  Exercise.findOneAndRemove({ _id: req.params.id }, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

// Log 
// exercise all
router.get('/profile/:id/logs', (function (req, res) {
  ExerciseLog.find({}, (function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  }));
}));

// create
router.post('/add_log', function (req, res) {
  var obj = new ExerciseLog(req.body);
  obj.save(function (err, obj) {
    if (err) return console.error(err);
    res.status(200).json(obj);
  });
});

// find by id
router.get('profile/:id/log/:id', function (req, res) {
  ExerciseLog.findOne({ _id: req.params.id }, function (err, obj) {
    if (err) return console.error(err);
    res.json(obj);
  })
});

// update by id
router.put('/profile/:id/log/:id', function (req, res) {
  ExerciseLog.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  })
});

// delete by id
router.delete('/profile/:id/log/:id', function (req, res) {
  ExerciseLog.findOneAndRemove({ _id: req.params.id }, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});
