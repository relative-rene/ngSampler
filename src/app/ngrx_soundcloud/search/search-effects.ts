import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app';
import { ApiService } from 'src/core';
import { getCurrentTracklist, TracklistActions } from 'src/tracklists';
import { SearchActions } from './search-actions';


@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store$: Store<AppState>,
    private tracklistActions: TracklistActions
  ) {}

  @Effect()
  loadSearchResults$ = this.actions$
    .ofType(SearchActions.LOAD_SEARCH_RESULTS)
    .withLatestFrom(this.store$.let(getCurrentTracklist()), (action, tracklist) => ({
      payload: action.payload,
      tracklist
    }))
    .filter(({tracklist}) => tracklist.isNew)
    .switchMap(({payload}) => this.api.fetchSearchResults(payload.query)
      .map(data => this.tracklistActions.fetchTracksFulfilled(data, payload.tracklistId))
      .catch(error => Observable.of(this.tracklistActions.fetchTracksFailed(error)))
    );
}
