const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/novelBin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  }).catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

const novelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  author: String,
  genre: [String],
  source: String,
  status: { type: [String], enum: ['Complete', 'In Progress', 'On Hold'] },
}, { collection: 'novels' });

const chapterSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  novel_id: String
}, { collection: 'chapters' })

const Novel = mongoose.model('Novel', novelSchema);
const Chapter = mongoose.model('Chapter', chapterSchema);


module.exports = { Novel, Chapter }