import express from 'express';
import { 
    getANovel, 
    createNovel, 
    getAllNovels, 
    updateNovel, 
    deleteNovel, 
    getAChapter, 
    updateChapter,
    getAllChapters, 
} from '../controllers/acg.controller';

export default (router: express.Router) => {
    router.post('/api/acg/novels/create', createNovel);
    router.get('/api/acg/novels', getAllNovels)
    router.get('/api/acg/novels/:novel_id', getANovel)
    router.put('/api/acg/novels/update/:novel_id', updateNovel)
    router.delete('/api/acg/novels/delete/:novel_id', deleteNovel)

    router.get('/api/acg/chapters/:novel_id', getAllChapters)
    router.get('/api/acg/chapters/:novel_id/chapter/:description',getAChapter)
    router.put('/api/acg/chapters/updateOne', updateChapter)
}