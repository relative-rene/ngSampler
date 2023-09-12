const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/sampler';

const express = require('express');
const path = require('path');
const catRoutes = require('./routes/cat');
const gainsRoutes = require('./routes/gains');

// const morgan = require('morgan'); // logger
// const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
app.set('port', (process.env.PORT || 3000));

// app.use('/', express.static(__dirname + '/../../dist'));
// app.use('/', express.static(__dirname + '/../public'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(morgan('dev'));
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  // Models
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Connected to MongoDB');

    router.use('/cat', catRoutes);
    router.use('/gains', gainsRoutes);

    // all other routes are handled by Angular
    app.get('/*', function (req, res) {
      res.sendFile(path.join(__dirname, '/../../dist/index.html'));
    });

    app.listen(app.get('port'), function () {
      console.log('Angular Sampler ' + app.get('port'));
    });
  });
});

module.exports = app;