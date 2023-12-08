import express from 'express';
import { deleteNovelById, getAllChaptersByNovelId, getByNovelIdAndChapter, getNovelById, getNovels, saveNovel, Chapter, putChapter } from 'models/acg.model';

export const getAllNovels = async (req: express.Request, res: express.Response) => {
    try {
        const novels = await getNovels();
        return res.status(200).json(novels)
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const getANovel = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const novel = await getNovelById(id);
        if(!novel) res.sendStatus(404);

        return res.sendStatus(200).json(novel).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}
export const deleteNovel = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const deletedNovel = await deleteNovelById(id);

        return res.json(deletedNovel)
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const updateNovel = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { title, description, author, genre, source, status } = req.body;

        if (req.body) {
            return res.sendStatus(400)
        }
        const novel = await getNovelById(id);
        novel.title = title || novel.title;
        novel.description = description || novel.description;
        novel.author = author || novel.author;
        novel.genre = genre || novel.genre;
        novel.source = source || novel.source;
        novel.status = status || novel.status;
        await novel.save();
        return res.status(200).json(novel).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const createNovel = async (req: express.Request, res: express.Response) => {
    try {
        const { title, description, author, genre, source, status } = req.body
        if (title && description && author && genre && source && status) {
            return res.sendStatus(403)
        }
        const novel = await saveNovel(req.body);
        return res.status(200).json(novel)
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const getAllChapters = async (req: express.Request, res: express.Response) => {
    try {
        const { novel_id } = req.params;
        const chapters = await getAllChaptersByNovelId(novel_id);
        if (!chapters) {
            return res.sendStatus(404)
        }
        return res.status(200).json(chapters)
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}
export const getAChapter = async (req: express.Request, res: express.Response) => {
    try {
        const { novel_id, description } = req.params;
        if (novel_id && description) return res.sendStatus(406)
        const chapters = await getByNovelIdAndChapter(novel_id, description);
        const specificChapter = chapters.filter((chapter: Record<string, any>) => chapter.description === description);
        return res.status(200).json(specificChapter)
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}
export const updateChapter = async (req: express.Request, res: express.Response) => {
    try {
        if (req.body) return res.sendStatus(406);

        const chapter = req.body;
        const { title, description, content } = chapter;
        chapter.title = title || chapter.title;
        chapter.description = description || chapter.description;
        chapter.content = content || chapter.content;
        chapter.save()
        return res.status(200).json(chapter)
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}
