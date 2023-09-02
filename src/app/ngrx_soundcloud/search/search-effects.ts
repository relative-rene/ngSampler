import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {  catchError, filter, map, of, switchMap, withLatestFrom } from 'rxjs';
import { AppState } from '../app/app.module';
import { ApiService } from '../core';
import { getCurrentTracklist, TracklistActions } from '../tracklists';
import { SearchActions } from './search-actions';


@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store$: Store<AppState>,
    private tracklistActions: TracklistActions
  ) {}

  loadSearchResults$ = createEffect(()=>this.actions$.pipe(
    ofType(SearchActions.LOAD_SEARCH_RESULTS),
    withLatestFrom(this.store$.pipe(getCurrentTracklist()), (action:any, tracklist) => ({
      payload: action.payload,
      tracklist
    })),
    filter(({tracklist}) => tracklist.isNew),
    switchMap(({payload}:any) => this.api.fetchSearchResults(payload.query).pipe(
      map(data => this.tracklistActions.fetchTracksFulfilled(data, payload.tracklistId)),
      catchError(error => of(this.tracklistActions.fetchTracksFailed(error)))
    ))));
}
