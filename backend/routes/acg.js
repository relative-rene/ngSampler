const acgRouter = require('express').Router();
const { Chapter, Novel } = require('../models/acg.model');

////////// Novel API  //////

// create
acgRouter.route('/novels/create').post((req, res, next) => {
  Novel.create(req.body, (error, data) => {
    if (error) return next(error)
    res.json(data);
  });
});

// get all
acgRouter.route('/novels').get((req, res, next) => {
  console.log('res ', res);
  Novel.find((err, data) => {
    console.log('data', data)
    if (err) return next(err);
    res.json(data);
  });
});

// find by id
acgRouter.route('/novels/:id').get((req, res, next) => {
  Novel.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    res.json(obj);
  });
});

// update by id
acgRouter.route('/novels/:id').put((req, res) => {
  Novel.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

// update user program or add exercise to list
acgRouter.route('/novels/:id').put((req, res) => {
  Novel.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

// delete by id
acgRouter.route('/novels/delete/:id').delete((req, res, next) => {
  Novel.findOneAndRemove(req.params.id, (error, data) => {
    if (error) return next(error);
    res.sendStatus(200).json({ msg: data });
  });
});

////////// Chapter API  //////

// get all
acgRouter.route('/chapters').get((req, res, next) => {
  Chapter.find((data) => {
    if (err) return next(err);
    res.json(data);
  });
});

// find by id
acgRouter.route('/chapters/:id').get((req, res, next) => {
  Chapter.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    res.json(obj);
  });
});

// update by id
acgRouter.route('/chapters/:id').put((req, res) => {
  Chapter.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

// update user program or add exercise to list
acgRouter.route('/chapters/:id').put((req, res) => {
  Chapter.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

// delete by id
acgRouter.route('/chapters/delete/:id').delete((req, res, next) => {
  Chapter.findOneAndRemove(req.params.id, (error, data) => {
    if (error) return next(error);
    res.sendStatus(200).json({ msg: data });
  });
});

module.exports = acgRouter;