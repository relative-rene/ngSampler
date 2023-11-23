export interface IChapterCollection {
    title: string;
    description: string;
    content: string;
    novel_id: string;
}

export interface INovelCollection {
    title: string;
    description: string;
    author: string;
    genre: string[];
    source: string;
    status: StatusEnum
}

enum StatusEnum {
    Complete,
    InProgress = 'In Progress',
    OnHold = 'On Hold'
}
