import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from '../core';
import { HomeModule } from '../home';
import { PlayerModule, playerReducer, timesReducer } from '../player';
import { SearchModule, searchReducer } from '../search';
import { SharedModule } from '../shared';
import { TracklistsModule, tracklistsReducer, tracksReducer } from '../tracklists';
import { UsersModule, usersReducer } from '../users';

import { SoundCloudComponent } from './components/app';
import { AppHeaderComponent } from './components/app-header';


export { AppState } from './interfaces';


@NgModule({
  imports: [
    RouterModule,
    StoreModule.forRoot({
      player: playerReducer,
      search: searchReducer,
      times: timesReducer,
      tracklists: tracklistsReducer,
      tracks: tracksReducer,
      users: usersReducer
    }),
    CoreModule,
    HomeModule,
    PlayerModule,
    SearchModule,
    SharedModule,
    TracklistsModule,
    UsersModule
  ],
  declarations: [
    SoundCloudComponent,
    AppHeaderComponent
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class SoundCloudModule {}
