import {Component } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { PagerService } from '../../../_services/pager.service';
import { SearchService } from '../../../_services/search.service';

import { ToastComponent } from '../../../shared/toast/toast.component';
import 'rxjs/add/operator/map';

declare let $: any;

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css'],
  providers: [UserService, PagerService, SearchService]

})

export class MentorListComponent {
  private pager: any = {}; // view model variable
  private allItems: any = [];
  public pagedItems: any[];
  public isEditing = false;

  constructor(
    private pagerService: PagerService,
    private userService: UserService,
    private searchService: SearchService,
    private toast: ToastComponent) {
    let count = 0;
      this.userService.getUsers().subscribe((res) => {
        res.forEach(function(profile) {
          // !! Pulls all users and filters for mentor status pending!!
          if (profile.mentorStatus === 'Approved') {
              this.allItems.push(profile);
          } else {
            count++;
            // console.log(count, 'fail', profile);
          }
        }, this);
        this.setPage(1);
      });
    }

  editMentor(form: any) {
    this.userService.updateById(this.pager._id, form).subscribe(
      res => {
        this.isEditing = false;
        this.pager = form;
        this.toast.setMessage('Profile Updated successfully.', 'success');
      });
  }

  declineMentor(id, pager) {
    // btn click updates profile mentor status to InActive
    // mentor profile not longer visiable throught habitat-mentorship page
    let rewardRow = '#' + id._id.toString();
    this.pager['mentorStatus'] = 'Declined';
    this.userService.updateById(id._id, this.pager).subscribe(
      res => {
        $(rewardRow).remove();
        this.toast.setMessage('Profile Removed from program.', 'success');
      });
  }

  // takes user to edit form
  enableEdit(pager) {
    this.isEditing = true;
    this.pager = pager;
    this.toast.setMessage('Edit Profile', 'warning');
  }

  cancelEditing() {
    this.isEditing = false;
    this.pager = {};
    this.toast.setMessage('Profile editing cancelled.', 'warning');
    // reload the mentors to reset the editing
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
