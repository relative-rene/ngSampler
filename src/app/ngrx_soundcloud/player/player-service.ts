import 'rxjs/add/operator/let';
import 'rxjs/add/operator/pluck';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PLAYER_INITIAL_VOLUME } from '../constants';
import { AppState } from '../app/app.module';
import { Track, TracklistCursor } from '../tracklists';
import { PlayerState } from './reducers/player-state';
import { getPlayer, getPlayerTrack, getPlayerTracklistCursor, getTimes } from './reducers/selectors';
import { TimesState } from './reducers/times-state';
import { AudioService } from './audio-service';
import { AudioSource } from './audio-source';
import { PlayerActions } from './player-actions';
import { playerStorage } from './player-storage';


@Injectable()
export class PlayerService extends AudioService {
  currentTime$: Observable<number>;
  cursor$: Observable<TracklistCursor>;
  player$: Observable<PlayerState>;
  times$: Observable<TimesState>;
  track$: Observable<Track>;


  constructor(private actions: PlayerActions, audio: AudioSource, private store$: Store<AppState>) {
    super(actions, audio);

    this.events$.subscribe(action => store$.dispatch(action));
    this.volume = playerStorage.volume || PLAYER_INITIAL_VOLUME;

    this.cursor$ = store$.pipe(getPlayerTracklistCursor());
    this.player$ = store$.pipe(getPlayer());

    this.track$ = store$.pipe(getPlayerTrack());
    this.track$.subscribe(track => this.play(track.streamUrl));

    this.times$ = store$.pipe(getTimes());
    this.currentTime$ = this.times$.pluck<number>('currentTime');
  }


  select({trackId, tracklistId}: {trackId: number, tracklistId: string}): void {
    this.store$.dispatch(
      this.actions.playSelectedTrack(trackId, tracklistId)
    );
  }
}
