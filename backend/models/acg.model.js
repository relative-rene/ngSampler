const mongoose = require('mongoose');
const novelBinCon = mongoose.createConnection('mongodb://127.0.0.1:27017/novelBin');


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

const Novel = novelBinCon.model('Novel', novelSchema);
const Chapter = novelBinCon.model('Chapter', chapterSchema);


module.exports = { Novel, Chapter }