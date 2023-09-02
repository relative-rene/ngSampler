import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';

import { AppState } from '../../app/app.module';
import { Selector } from '../../core';
import { getTracklistCursor, getTracklists, getTracks, Track, Tracklist, TracklistCursor } from '../../tracklists';
import { PlayerState } from './player-state';
import { TimesState } from './times-state';


export function getPlayer(): Selector<AppState,PlayerState> {
  return state$ => state$
    .map(state => state.player)
    .distinctUntilChanged();
}

export function getPlayerTrack(): Selector<AppState,Track> {
  return state$ => state$
    .select(getPlayerTrackId())
    .distinctUntilChanged()
    .withLatestFrom(state$.select(getTracks()),
      (trackId, tracks) => tracks.get(trackId))
    .filter(track => !!track)
    .distinctUntilChanged();
}

export function getPlayerTrackId(): Selector<AppState,number> {
  return state$ => state$
    .map(state => state.player.trackId);
}

export function getPlayerTracklist(): Selector<AppState,Tracklist> {
  return state$ => state$
    .map(state => state.player.tracklistId)
    .combineLatest(state$.select(getTracklists()),
      (tracklistId, tracklists) => tracklists.get(tracklistId))
    .filter(tracklist => tracklist)
    .distinctUntilChanged();
}

export function getPlayerTracklistCursor(distinct: boolean = true): Selector<AppState,TracklistCursor> {
  return state$ => {
    let source$ = state$.select(getPlayerTrackId());
    if (distinct) source$ = source$.distinctUntilChanged();
    return source$.combineLatest(state$.select(getPlayerTracklist()), getTracklistCursor);
  };
}

export function getTimes(): Selector<AppState,TimesState> {
  return state$ => state$
    .map(state => state.times)
    .distinctUntilChanged();
}
