

export interface Tracklist {
  currentPage: number;
  hasNextPage: boolean;
  hasNextPageInStore: boolean;
  id: string;
  isNew: boolean;
  isPending: boolean;
  nextUrl: string;
  pageCount: number;
  trackIds:Array<number>;
}

export function createTracklistRecord():Tracklist{
  return Object.create({
    currentPage: 0,
    hasNextPage: null,
    hasNextPageInStore: null,
    id: null,
    isNew: true,
    isPending: false,
    nextUrl: null,
    pageCount: 0,
    trackIds: []
  });
}
