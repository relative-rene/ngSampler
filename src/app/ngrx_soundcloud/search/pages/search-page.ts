import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/takeUntil';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, map, takeUntil } from 'rxjs';
import { SearchService } from '../search-service';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <content-header 
        [section]="section" 
        [title]="search.query$ | async"></content-header>
  
      <tracklist></tracklist>
    </section>
  `
})

export class SearchPageComponent {
  ngOnDestroy$ = new Subject<boolean>();
  section = 'Search Results';

  constructor(public route: ActivatedRoute, public search: SearchService) {
    route.params.pipe(
      takeUntil(this.ngOnDestroy$)),
      map(({q})=> search.loadSearchResults(q));
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(true);
  }
}
