import { TRACKS_PER_PAGE } from '../../constants';
import { SearchActions } from '../../search/search-actions';
import { UserActions } from '../../users/user-actions';
import { Tracklist, createTracklistRecord } from '../models/tracklist';
import { TracklistActions } from '../tracklist-actions';
import { ActionPayload } from '../../core';

const initialState: Tracklist = createTracklistRecord() as Tracklist;

export const tracklistReducer = (state: Tracklist = initialState, { payload, type }: ActionPayload) => {
  let pagination = updatePagination(state, state.currentPage + 1);
  switch (type) {
    case TracklistActions.FETCH_TRACKS_FULFILLED:
      return Object.assign({ ...state }, {
        isNew: false,
        isPending: false,
        nextUrl: payload.next_href || null,
        trackIds: Object.assign({ ...state.trackIds, ...payload.collection }),
        ...pagination
      }) as Tracklist;

    case TracklistActions.LOAD_NEXT_TRACKS:
      return state.hasNextPageInStore ?
        Object.assign({ ...state }, { ...pagination }) :
        Object.assign({ ...state }, { 'isPending': true })
    case TracklistActions.LOAD_FEATURED_TRACKS:
    case SearchActions.LOAD_SEARCH_RESULTS:
    case UserActions.LOAD_USER_LIKES:
    case UserActions.LOAD_USER_TRACKS:
      return state.isNew ?
        Object.assign({ ...state }, { id: payload.tracklistId, isPending: true }) as Tracklist :
        Object.assign({ ...state }, { currentPage: 1 }) as Tracklist;
    default:
      return state;
  }
};

function updatePagination(tracklist: Tracklist, page: number): any {
  let pageCount = Math.ceil(tracklist.trackIds.length / TRACKS_PER_PAGE);
  let currentPage = Math.min(page, pageCount);
  let hasNextPageInStore = currentPage < pageCount;
  let hasNextPage = hasNextPageInStore || tracklist.nextUrl !== null;

  return {
    currentPage,
    hasNextPage,
    hasNextPageInStore,
    pageCount
  };
}
