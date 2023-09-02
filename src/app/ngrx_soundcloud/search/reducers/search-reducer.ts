import { SearchActions } from '../search-actions';
import { SearchState } from './search-state';
import { ActionPayload } from '../../core';

export const searchReducer = (state: SearchState = {query:null}, action: ActionPayload) => {
  switch (action.type) {
    case SearchActions.LOAD_SEARCH_RESULTS:
      return Object.assign({}, {query: action.payload.query}) as SearchState;

    default:
      return state;
  }
};
