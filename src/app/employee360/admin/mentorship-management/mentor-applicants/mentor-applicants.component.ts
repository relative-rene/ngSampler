
import { Component, AfterViewInit } from '@angular/core';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { UserService } from '../../../_services/user.service';
import { PagerService } from '../../../_services/pager.service';
import 'rxjs/add/operator/map';

declare let $: any;


@Component({
  selector: 'app-mentor-applicants',
  templateUrl: './mentor-applicants.component.html',
  styleUrls: ['./mentor-applicants.component.css'],
  providers: [UserService, ToastComponent, PagerService]

})
export class MentorApplicantsComponent implements AfterViewInit {
  private pager: any = {}; // view model variable
  private allItems: any = [];
  public pagedItems: any[];
  private isLoading = false;


  constructor(
    private pagerService: PagerService,
    private userService: UserService,
    private toast: ToastComponent) {
    let count = 0;
    this.userService.getUsers().subscribe((res) => {
      res.forEach(function(profile) {
        // !! Pulls all users and filters for mentor status pending!!
        if (profile.mentorStatus === 'Pending') {
          this.allItems.push(profile);
        } else {
          count++;
          // console.log(count, 'fail', profile);
        }
      }, this);
      this.setPage(1);
    });
  }

  approveMentor(id, pager) {
    // btn click updates profile mentor status to Approved, profile earmarked and mentor info is viewable on habitat-mentorship path
    let rewardRow = '#' + id._id.toString();
    this.pager['mentorStatus'] = 'Approved';
    this.userService.updateById(id._id, this.pager)
      .subscribe((res) => {
        $(rewardRow).remove();
        this.toast.setMessage('Profile approved for Mentorship Program', 'success');
      });
    //   , error => this.toast.setMessage('Sorry you are not authorized to approve profiles', 'warning')
    // );
  }

  declineMentor(id, pager) {
    // btn click updates profile mentor status to Declined, and archives application
    let rewardRow = '#' + id._id.toString();
    this.pager['mentorStatus'] = 'Declined';
    this.userService.updateById(id._id, this.pager)
      .subscribe(res => {
        $(rewardRow).remove();
        this.toast.setMessage('Profile declined for Mentorship Program', 'warning');
      });
  }

  ngAfterViewInit() {
    this.isLoading = false;
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
