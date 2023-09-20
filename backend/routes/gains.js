const gainsRouter = require('express').Router();
const { Profile, Exercise, ExerciseLog } = require('../models/gains.model');

////////// Profile api  //////

// create
gainsRouter.route('/profiles/create').post((req, res, next) => {
  console.log('req.body', req.body)
  Profile.create(req.body, (error, data) => {
    if (error) return next(error)
      res.json(data);
  });
});

// get all
gainsRouter.route('/profiles').get((req, res) => {
  Profile.find((err, data) => {
    if (err) return next(err);
    res.json(data);
  });
});

// find by id
gainsRouter.route('/profiles/:id').get((req, res) => {
  Profile.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    res.json(obj);
  });
});
// find by id
gainsRouter.route('/profiles/:id/exercises').get((req, res) => {
  Profile.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    res.json(obj.exercise_list);
  });
});

// update by id
gainsRouter.route('/profiles/update/:id').put((req, res) => {
  Profile.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});
// update user program or add exercise to list
gainsRouter.route('/profiles/update/:id').put((req, res) => {
  Profile.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});



// delete by id
gainsRouter.route('/profiles/delete/:id').delete((req, res, next) => {
  Profile.findOneAndRemove(req.params.id, (error, data) => {
    if (error) return next(error);
    res.sendStatus(200).json({ msg: data });
  });
});

////// Exercises api //////////

// create
gainsRouter.route('/exercises/create').post((req, res, next) => {
  console.log('body', req.body);
  Exercise.create(req.body, (error, data) => {
    if (error) return next(error)
      res.json(data);
  });
});

// get all
gainsRouter.route('/exercises').get((req, res) => {
  Exercise.find((err, data) => {
    if (err) return next(err);
    res.json(data);
  });
});


// find by id
gainsRouter.route('/exercises/read/:id').get((req, res) => {
  Exercise.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    res.json(obj);
  });
});

// update by id
gainsRouter.route('/exercises/update/:id').put((req, res) => {
  Exercise.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

// delete by id
gainsRouter.route('/exercises/delete/:id').delete((req, res, next) => {
  Exercise.findOneAndRemove(req.params.id, (error, data) => {
    if (error) return next(error);
    res.sendStatus(200).json({ msg: data });
  });
});

//////////// Log api ///////

// exerciseLogs all
gainsRouter.get('/profiles/:id/logs', (function (req, res) {
  ExerciseLog.find({}, (function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  }));
}));

// create
gainsRouter.post('/profiles/:id/createLog', function (req, res) {
  var obj = new ExerciseLog(req.body);
  obj.save(function (err, obj) {
    if (err) return console.error(err);
    res.status(200).json(obj);
  });
});

// find by id
gainsRouter.get('profile/:id/logs/:id', function (req, res) {
  ExerciseLog.findOne({ _id: req.params.id }, function (err, obj) {
    if (err) return console.error(err);
    res.json(obj);
  })
});

// update by id
gainsRouter.put('/profile/:id/logs/:id', function (req, res) {
  ExerciseLog.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  })
});

// delete by id
gainsRouter.delete('/profile/:id/logs/:id', function (req, res) {
  ExerciseLog.findOneAndRemove({ _id: req.params.id }, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});


module.exports = gainsRouter;