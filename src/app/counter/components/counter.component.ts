import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/counter.actions';
import { CommonModule } from '@angular/common';
import { AppStoreModule } from 'src/app/app-store.module';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  standalone: true,
  imports: [CommonModule, AppStoreModule]

})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}