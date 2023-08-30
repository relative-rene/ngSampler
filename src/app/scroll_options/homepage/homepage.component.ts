import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { switchMap,tap } from 'rxjs/operators';
import { PassengerService } from '../data-access/passenger.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  currentPage$ = new BehaviorSubject<number>(1);
  #currentInfiniteEvent?: InfiniteScrollCustomEvent | null;

  currentPageData$ = this.currentPage$.pipe(
    switchMap((currentPage) => 
      this.passengerService.getPassengerData(currentPage)),
    tap(() => {
      if (this.#currentInfiniteEvent) {
        this.#currentInfiniteEvent.target.complete();
        this.#currentInfiniteEvent = null;
      }
    })
  );
  constructor(private passengerService: PassengerService){
    console.log('')
  }
  loadData(event:InfiniteScrollCustomEvent){
    this.#currentInfiniteEvent = event;
    this.currentPage$.next(this.currentPage$.value + 1)
  }
}
