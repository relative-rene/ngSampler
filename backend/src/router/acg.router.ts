import express from 'express';
import { createNovel, getAllNovels, getANovel, updateNovel, deleteNovel, getAllChapters, getAChapter, updateChapter } from 'controllers/acg.controller';

export default (router: express.Router) => {
    router.post('/novels/create', createNovel);
    router.get('/novels', getAllNovels)
    router.get('/novels/:novel_id', getANovel)
    router.put('/novels/update/:novel_id', updateNovel)
    router.delete('/novels/delete/:novel_id', deleteNovel)

    router.get('/chapters/:novel_id', getAllChapters)
    router.get('/chapters/:novel_id/chapter/:description',getAChapter)
    router.put('/chapters/updateOne', updateChapter)
}