import 'rxjs/add/operator/let';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { AppState } from '../app';
import { Tracklist } from './models/tracklist';
import { Track } from './models/track';
import { getCurrentTracklist, getTracksForCurrentTracklist } from './reducers/selectors';
import { TracklistActions } from './tracklist-actions';


@Injectable()
export class TracklistService {
  tracklist$: Observable<Tracklist>;
  tracks$: Observable<List<Track>>;

  constructor(private actions: TracklistActions, private store$: Store<AppState>) {
    this.tracklist$ = store$.select(getCurrentTracklist());
    this.tracks$ = store$.select(getTracksForCurrentTracklist());
  }

  loadFeaturedTracks(): void {
    this.store$.dispatch(
      this.actions.loadFeaturedTracks()
    );
  }

  loadNextTracks(): void {
    this.store$.dispatch(
      this.actions.loadNextTracks()
    );
  }
}
