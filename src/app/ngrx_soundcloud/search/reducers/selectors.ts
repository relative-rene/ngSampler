import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import { AppState } from '../../app';
import { Selector } from '../../core';
import { distinctUntilChanged, map } from 'rxjs';


export function getSearchQuery(): Selector<AppState,string> {
  return state$ => state$.pipe(
    map(state => state.search.query),
    distinctUntilChanged());
}
