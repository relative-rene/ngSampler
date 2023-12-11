import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';

import { TrackCardComponent } from './components/track-card';
import { TracklistComponent } from './components/tracklist';
import { TracklistItemsComponent } from './components/tracklist-items';
import { WaveformComponent } from './components/waveform';
import { WaveformTimelineComponent } from './components/waveform-timeline';

import { TracklistActions } from './tracklist-actions';
import { TracklistEffects } from './tracklist-effects';
import { TracklistService } from './tracklist-service';
import { CommonModule } from '@angular/common';


export { TracklistActions, TracklistService };
export { createTrack, Track, TrackData } from './models/track';
export { Tracklist } from './models/tracklist';
export { getCurrentTracklist, getTracks, getTracklists } from './reducers/selectors';
export { TracklistsState, tracklistsReducer } from './reducers/tracklists-reducer';
export { TracksState, tracksReducer } from './reducers/tracks-reducer';
export { getTracklistCursor, TracklistCursor } from './tracklist-cursor';


@NgModule({
  declarations: [
    TrackCardComponent,
    TracklistComponent,
    TracklistItemsComponent,
    WaveformComponent,
    WaveformTimelineComponent
  ],
  exports: [
    TracklistComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    EffectsModule.forRoot(TracklistEffects)
  ],
  providers: [
    TracklistActions,
    TracklistService
  ]
})
export class TracklistsModule {}
