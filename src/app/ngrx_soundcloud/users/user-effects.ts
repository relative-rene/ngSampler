import { Injectable } from '@angular/core';
import { Actions,  createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {  catchError, filter, map, of, switchMap, withLatestFrom } from 'rxjs';
import { AppState } from '../app';
import { ApiService } from '../core';
import { getCurrentTracklist, TracklistActions } from '../tracklists';
import { getCurrentUser } from './reducers/selectors';
import { UserActions } from './user-actions';


@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store$: Store<AppState>,
    private tracklistActions: TracklistActions,
    private userActions: UserActions
  ) {}

  
  loadUser$ = createEffect(()=> this.actions$.pipe(
    ofType(UserActions.LOAD_USER),
    withLatestFrom(this.store$.pipe(getCurrentUser()), (action:any, user:any) => ({
      payload: action.payload,
      user
    })),
    filter(({user}) => !user || !user.profile),
    switchMap(({payload}) => this.api.fetchUser(payload.userId)),
      map(data => this.userActions.fetchUserFulfilled(data)),
      catchError(error => of(this.userActions.fetchUserFailed(error)))
    ));

  
  loadUserLikes$ = createEffect(()=> this.actions$.pipe(
    ofType(UserActions.LOAD_USER_LIKES, TracklistActions.LOAD_FEATURED_TRACKS),
    withLatestFrom(this.store$.select(getCurrentTracklist()), (action:any, tracklist:any) => ({
      payload: action.payload,
      tracklist
    })),
    filter(({tracklist}) => tracklist.isNew),
    switchMap(({payload}) => this.api.fetchUserLikes(payload.userId).pipe(
      map(data => this.tracklistActions.fetchTracksFulfilled(data, payload.tracklistId)),
      catchError(error => of(this.tracklistActions.fetchTracksFailed(error))
    )))));

  
  loadUserTracks$ = createEffect(()=>this.actions$.pipe(
    ofType(UserActions.LOAD_USER_TRACKS),
    withLatestFrom(this.store$.select(getCurrentTracklist()), (action:any, tracklist) => ({
      payload: action.payload,
      tracklist
    })),
    filter(({tracklist}:any) => tracklist.isNew),
    switchMap(({payload}:any) =>  this.api.fetchUserTracks(payload.userId).pipe(
      map(data => this.tracklistActions.fetchTracksFulfilled(data, payload.tracklistId)),
      catchError(error => of(this.tracklistActions.fetchTracksFailed(error))
    )))));
}
