import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';
import { TracklistsModule } from '../tracklists';

import { UserCardComponent } from './components/user-card';
import { UserPageComponent } from './pages/user-page';

import { UserActions } from './user-actions';
import { UserEffects } from './user-effects';
import { UserService } from './user-service';
import { CommonModule } from '@angular/common';


export { UserActions, UserService };
export { User, UserData} from './models/user';
export { usersReducer, UsersState } from './reducers/users-reducer';


const routes: Routes = [
  {path: 'users/:id/:resource', component: UserPageComponent}
];


@NgModule({
  declarations: [
    UserCardComponent,
    UserPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    EffectsModule.forRoot(UserEffects),
    TracklistsModule,
    CommonModule
  ],
  providers: [
    UserActions,
    UserService
  ]
})
export class UsersModule {}
