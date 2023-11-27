const express = require('express')
const path = require('path')
// const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

// Connecting with mongo db
// mongoose
//   .connect('mongodb://127.0.0.1:27017/sampler', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((x) => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch((err) => {
//     console.error('Error connecting to mongo', err.reason)
//   })
// Setting up port with express js
const gainsRoute = require('../backend/routes/gains')
const acgRoute = require('../backend/routes/acg')
const app = express();
app.set('host', process.env.HOST || '0.0.0.0')
app.set('port', process.env.PORT || 4000)
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/ng-sampler')))
app.use('/', express.static(path.join(__dirname, 'dist/ng-sampler')))
app.use('/api/gains', gainsRoute);
app.use('/api/acg', acgRoute);

// Create port

const server = app.listen(app.get('port'), app.get('host'), error => {
  if (error) {
    console.error(error);
  }
  else {
    console.info(`Server listening @ ${app.get('host')}:${app.get('port')}`);
  }
});

// Find 404 and hand over to error handler
app.use((err, req, res, next) => {
  next(console.error({ statusCode: err.statusCode, message: err.messsage }))
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.message) // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500 // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message) // All HTTP requests must have a response, so let's send back an error with its status code and message
})