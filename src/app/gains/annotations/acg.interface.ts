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

/** 
function f(obj: Param){
    return obj
}
f({name:"Kyle"})
f(new Date())

Don't do
  because Obect are the base of everything the below code reads as : any
  type Param = {} 
  type Param = Object

Do this instead
    type Param = Record<string,unknown> // 
    type Param = {
        [index:string]:unknown
    }



*/