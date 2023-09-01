import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/takeUntil';

import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, distinctUntilChanged, map, takeUntil } from 'rxjs';
import { UserService } from '../user-service';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <user-card 
        [resource]="resource"
        [user]="user.currentUser$ | async"></user-card>
  
      <tracklist></tracklist>
    </section>
  `
})
export class UserPageComponent implements OnDestroy {
  public ngOnDestroy$ = new Subject<boolean>();
  public resource: string = '';

  constructor(public route: ActivatedRoute, public user: UserService) {
    route.params.pipe(
      takeUntil(this.ngOnDestroy$)),
      map(({id, resource}: {id: string, resource: string}) => {
        user.loadResource(id, resource);
        this.resource = resource;
      }),
      map(({id})=> user.loadUser(id)),
      distinctUntilChanged();
  }

  ngOnDestroy(): void {
    this.ngOnDestroy$.next(true);
  }
}
