var express = require('express');
var path = require('path');
var catRoutes = require('./routes/cat');
// var morgan = require('morgan'); // logger
// var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000));

// app.use('/', express.static(__dirname + '/../../dist'));
// app.use('/', express.static(__dirname + '/../public'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(morgan('dev'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sampler');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

// Models

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

  app.use('/cat',catRoutes);
  app.use('/gains', gainsRoutes);
  
  // all other routes are handled by Angular
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/../../dist/index.html'));
  });

  app.listen(app.get('port'), function() {
    console.log('Angular Sampler '+app.get('port'));
  });
});

module.exports = app;