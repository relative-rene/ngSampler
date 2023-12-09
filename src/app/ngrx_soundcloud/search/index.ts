import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';
import { TracklistsModule } from '../tracklists';

import { SearchBarComponent } from './components/search-bar';
import { SearchPageComponent } from './pages/search-page';

import { SearchActions } from './search-actions';
import { SearchEffects } from './search-effects';
import { SearchService } from './search-service';


export { SearchActions, SearchService };
export { searchReducer } from './reducers/search-reducer';
export { SearchState } from './reducers/search-state';


const routes: Routes = [
  {path: 'search', component: SearchPageComponent}
];


@NgModule({
  declarations: [
    SearchBarComponent,
    SearchPageComponent
  ],
  exports: [
    SearchBarComponent
  ],
  imports: [
    EffectsModule.forRoot(SearchEffects),
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    TracklistsModule,
    FormsModule,
  ],
  providers: [
    SearchActions,
    SearchService
  ]
})
export class SearchModule {}
