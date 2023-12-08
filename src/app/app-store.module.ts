import { authReducer } from 'src/app/store/reducers';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/store/counter.reducer';

@NgModule({
  imports: [StoreModule.forRoot({ count: counterReducer, auth: authReducer})],
  providers: [],
})
export class AppStoreModule {}