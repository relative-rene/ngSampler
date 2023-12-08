const mongoose = require('mongoose');
const novelBinCon = mongoose.createConnection('mongodb://127.0.0.1:27017/novelBin', { useNewUrlParser: true, useUnifiedTopology: true });


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

export const createNovel = (values: Record<string, any>) => Novel.create(values);
export const getAllNovels = () => Novel.find();
export const getOneNovel = (id: string) => Novel.findById({ _id: id });
export const patchOneNovel = (id: string, values: Record<string, any>) => Novel.findOneAndUpdate({ _id: id, values });
export const deleteNovel = (id: string) => Novel.findOneAndRemove({ _id: id });

export const getAllChapters = (novelId: string) => Chapter.find({ novel_id: novelId });
export const getByNovelIdAndChapter = (novelId: string, chapterNumber: string) => Chapter.find({ novel_id: novelId, description: chapterNumber })
export const putNovel = (id: string, values: Record<string, any>) => Chapter.replaceOne(id, values);