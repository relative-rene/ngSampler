const acgRouter = require('express').Router();
const { Chapter, Novel } = require('../models/acg.model');
const mongoose = require('mongoose');
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
  console.log('/novels')
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


// gets all chapters by novel_id 
acgRouter.route('/chapters/:novel_id').get((req, res, next) => {
  const { novel_id } = req.params;
  Chapter.find({ "novel_id": novel_id }, (err, obj) => {
    console.log('obj', obj)
    if (err) return next(err);
    res.json(obj);
  });
});

/**
 * get chapter by novel_id and description. e.g 'Super Gene', 'Chapter 23'
 */
acgRouter.route('/chapters/:novel_id/chapter/:description').get((req, res, next) => {
  const { novel_id, description } = req.params;
  Chapter.find({ "novel_id": novel_id, "description": { $regex: description } }, (err, obj) => {
    console.log('obj', obj)
    if (err) return next(err);
    res.json(obj);
  })
});


// // find by novel_id
// acgRouter.route('/chapters').get((req, res, next) => {
//   let decodedParam = decodeURI(req.params.novel_id)
//   console.log('decodedParam :id', decodedParam)

//   Chapter.find({'novel_id': decodedParam}, (err, data) => {
//     if (err) return next(err);
//     res.json(data);
//   });
// });



// asIs
acgRouter.route('/chapters/updateOne').put((req, res) => {
  Chapter.replaceOne({ _id: mongoose.Types.ObjectId(req.body._id) }, req.body.newObj, function (err) {
    if (err) return console.error(err);
    res.sendStatus(200);
  });
});

// // delete by id
// acgRouter.route('/chapters/delete/:id').delete((req, res, next) => {
//   Chapter.findOneAndRemove(req.params.id, (error, data) => {
//     if (error) return next(error);
//     res.sendStatus(200).json({ msg: data });
//   });
// });

module.exports = acgRouter;