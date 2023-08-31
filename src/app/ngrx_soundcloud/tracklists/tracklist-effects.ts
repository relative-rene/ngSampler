import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, filter, map, of, switchMap, withLatestFrom } from 'rxjs';
import { AppState } from '../app';
import { ApiService } from '../core';
import { getCurrentTracklist } from './reducers/selectors';
import { TracklistActions } from './tracklist-actions';


@Injectable()
export class TracklistEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store$: Store<AppState>,
    private tracklistActions: TracklistActions
  ) {}

  
  loadNextTracks$ = createEffect(()=> this.actions$.pipe(
    ofType(TracklistActions.LOAD_NEXT_TRACKS),
    withLatestFrom(this.store$.select(getCurrentTracklist()), (action:any, tracklist) => tracklist),
    filter(tracklist => tracklist.isPending),
    switchMap(tracklist => this.api.fetch(tracklist.nextUrl).pipe(
      map(data => this.tracklistActions.fetchTracksFulfilled(data, tracklist.id)),
      catchError(error => of(this.tracklistActions.fetchTracksFailed(error)))
    ))));
}
