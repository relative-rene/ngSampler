import 'rxjs/add/operator/let';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app/app.module';
import { getSearchQuery } from './reducers/selectors';
import { SearchActions } from './search-actions';


@Injectable()
export class SearchService {
  query$: Observable<string>;

  constructor(private actions: SearchActions, private store$: Store<AppState>) {
    this.query$ = store$.pipe(getSearchQuery());
  }

  loadSearchResults(query: string): void {
    if (typeof query === 'string' && query.length) {
      this.store$.dispatch(
        this.actions.loadSearchResults(query)
      );
    }
  }
}
