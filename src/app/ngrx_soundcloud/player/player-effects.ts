import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../app';
import { getPlayerTracklistCursor } from './reducers/selectors';
import { PlayerActions } from './player-actions';
import { playerStorage } from './player-storage';
import { withLatestFrom, filter, map, ignoreElements, tap } from 'rxjs';


@Injectable()
export class PlayerEffects {
  constructor(
    private actions$: Actions,
    private playerActions: PlayerActions,
    private store$: Store<AppState>
  ) {}

  audioEnded$ = createEffect(()=>this.actions$.pipe(
    ofType(PlayerActions.AUDIO_ENDED),
    withLatestFrom(this.store$.pipe(getPlayerTracklistCursor(false)), (action, cursor) => cursor),
    filter((cursor:any) => !!cursor.nextTrackId),
    map(cursor => this.playerActions.playSelectedTrack(cursor.nextTrackId))));


  audioVolumeChanged$ = createEffect(()=> this.actions$.pipe(
    ofType(PlayerActions.AUDIO_VOLUME_CHANGED),
    tap((action:any) => playerStorage.volume = action.payload.volume)));
  
};
