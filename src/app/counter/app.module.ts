import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { CounterComponent } from './components/counter.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, AppRoutingModule, StoreModule.forRoot({ count: counterReducer })],
  providers: [],
})
export class CounterModule {}