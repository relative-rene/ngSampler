import { Component } from '@angular/core';
import { ToastComponent } from '../../shared/toast/toast.component';
import { UserService } from '../../_services/user.service';
// import { SearchService } from './../../_services/search.service';
import { PagerService } from '../../_services/pager.service';

@Component({
  selector: 'app-habitat-mentorship',
  templateUrl: './habitat-mentorship.component.html',
  styleUrls: ['./habitat-mentorship.component.css'],
  providers: [UserService, PagerService]
})

export class HabitatMentorshipComponent {
  // array of all items to be paged
  private allItems: any = [];
  // pager object
  public pager: any = {};
  // paged items
  public pagedItems: any[];
  // toggle, extend profile info
  public option = 1;

  constructor(
    private userService: UserService,
    // private searchService: SearchService,
    private pagerService: PagerService,
    private toast: ToastComponent) {
    // let count;
    // get users
    this.userService.getUsers().subscribe((res) => {
      res.forEach(function (profile) {
        if (profile.mentorStatus === 'Approved') {
          profile.extendInfo = false;
          this.allItems.push(profile);
        }
        // else {
        //   count++;
        // }
      }, this);
      this.setPage(1);
    });
  }

  sortMentors(sort, order) {
    console.log('sort=' + sort + '&order=' + order);

    this.userService.getUsers('sort=' + sort + '&order=' + order).subscribe((res) => {
      // console.log(res);
      this.allItems = [];
      res.forEach(function (profile) {
        if (profile.mentorStatus === 'Approved') {
          profile.extendInfo = false;
          this.allItems.push(profile);
        }
      }, this);
      this.setPage(1);
    });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    // console.log('pagedItems: ', this.pagedItems);
  }
  enableComment(pager) {
    this.pager = pager;
    console.log('PARENT', this.pager);
  }

  toggleInfo(pager) {
    if (pager.extendInfo === true) {
      pager.extendInfo = false;
    } else {
      pager.extendInfo = true;
    }
  }
}
