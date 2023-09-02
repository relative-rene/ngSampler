import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';

import { AppState } from '../../app';
import { TRACKS_PER_PAGE } from '../../constants';
import { Selector } from '../../core';
import { Tracklist } from '../models/tracklist';
import { Track } from '../models/track';
import { TracklistsState } from './tracklists-reducer';
import { TracksState } from './tracks-reducer';
import { distinctUntilChanged, filter, map, withLatestFrom } from 'rxjs';


export function getTracklists(): Selector<AppState,TracklistsState> {
  return state$ => state$.pipe(
    map(state => state.tracklists),
    distinctUntilChanged());
}

export function getTracks(): Selector<AppState,TracksState> {
  return state$ => state$.pipe(
    map(state => state.tracks),
    distinctUntilChanged())
}

export function getCurrentTracklist(): Selector<AppState,Tracklist> {
  return state$ => state$.pipe(
    (getTracklists()),
    map(tracklists => tracklists.get(tracklists.get('currentTracklistId'))),
    filter(tracklist => tracklist),
    distinctUntilChanged());
}

export function getTracksForCurrentTracklist(): Selector<AppState,Array<Track>> {
  return state$ => state$.pipe(
    (getCurrentTracklist()),
    distinctUntilChanged((previous, next) => {
      return previous.currentPage === next.currentPage &&
             previous.trackIds === next.trackIds;
    }),
    withLatestFrom(state$.pipe(getTracks()), (tracklist, tracks) => {
      return tracklist.trackIds
        .slice(0, tracklist.currentPage * TRACKS_PER_PAGE)
        .map(id => tracks.get(id) as Track)}));

}
