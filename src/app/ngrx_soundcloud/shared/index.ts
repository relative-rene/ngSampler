import { NgModule } from '@angular/core';

import { AudioTimelineComponent } from './components/audio-timeline';
import { ContentHeaderComponent } from './components/content-header';
import { IconComponent } from './components/icon';
import { IconButtonComponent } from './components/icon-button';
import { LoadingIndicatorComponent } from './components/loading-indicator';

import { FormatIntegerPipe } from './pipes/format-integer';
import { FormatTimePipe } from './pipes/format-time';


@NgModule({
  declarations: [
    AudioTimelineComponent,
    ContentHeaderComponent,
    IconComponent,
    IconButtonComponent,
    LoadingIndicatorComponent,
    FormatIntegerPipe,
    FormatTimePipe
  ],
  exports: [
    AudioTimelineComponent,
    ContentHeaderComponent,
    IconComponent,
    IconButtonComponent,
    LoadingIndicatorComponent,
    FormatIntegerPipe,
    FormatTimePipe
  ]
})
export class SharedModule {}
