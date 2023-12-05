import { Injectable, NgZone } from '@angular/core';
import { Observable,Subscription, debounceTime, filter, fromEvent, map, never, switchMap, takeUntil, tap } from 'rxjs';
import { Selector } from '../../core';
import { Tracklist } from '../models/tracklist';
import { TracklistService } from '../tracklist-service';


interface ScrollData {
  windowInnerHeight: number;
  windowPageYOffset: number;
  bodyScrollHeight: number;
}


@Injectable()
export class TracklistScrollService {
  private infiniteScroll$: Observable<any>;
  private scrollData$: Observable<ScrollData>;


  constructor(private tracklist: TracklistService, private zone: NgZone) {
    this.scrollData$ = Observable
      .fromEvent(window, 'scroll')
      .debounceTime(100)
      .select(this.getScrollData());

    const checkPosition$ = this.scrollData$.pipe(
      filter((data: ScrollData) => {
        return data.windowInnerHeight + data.windowPageYOffset >= data.bodyScrollHeight - data.windowInnerHeight;
      }))

    const pause$ = never();

    this.infiniteScroll$ = tracklist.tracklist$.pipe(
      map(({isPending, hasNextPage}: Tracklist) => isPending || !hasNextPage),
      switchMap(pause => pause ? pause$ : checkPosition$))
      tap(() => this.zone.run(() => this.tracklist.loadNextTracks()))
  }


  infinite(cancel$: Observable<any>): Subscription {
    return this.infiniteScroll$.pipe(
      takeUntil(cancel$))
  }

  private getScrollData(): Selector<UIEvent,ScrollData> {
    return event$ => event$.pipe(map(event => {
        const { body, defaultView } = event.target as HTMLDocument;
        return {
          windowInnerHeight: defaultView!.innerHeight,
          windowPageYOffset: defaultView!.pageYOffset,
          bodyScrollHeight: body.scrollHeight
        };
      }))
  }
}
