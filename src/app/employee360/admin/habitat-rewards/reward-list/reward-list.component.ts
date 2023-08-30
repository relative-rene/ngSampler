import { Component } from '@angular/core';
import { RewardService } from '../../../_services/reward.service';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { PagerService } from '../../../_services/pager.service';
import 'rxjs/add/operator/map';

declare let $: any;


@Component({
  selector: 'app-reward-list',
  templateUrl: './reward-list.component.html',
  styleUrls: ['./reward-list.component.css'],
  providers: [RewardService, PagerService]

})

export class RewardListComponent {
  private allItems: any = [];
  public pager: any = {}; // view model variable
  public pagedItems: any[];

  private isEditing = false;

  constructor(
    private pagerService: PagerService,
    public rewardService: RewardService,
    public toast: ToastComponent) {
    this.rewardService.getRewards().subscribe(res => {
      this.allItems = res;
      this.setPage(1);
    });
  }

  enableEditing(pager) {
    this.isEditing = true;
    this.pager = pager;
  }

  cancelEditing() {
    this.isEditing = false;
    this.pager = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the rewards to reset the editing
  }

  editReward(form: any) {
    this.rewardService.editReward(this.pager._id, form).subscribe(
      res => {
        this.isEditing = false;
        this.pager = {};
        this.toast.setMessage('Reward edited successfully.', 'success');
      }, error => this.toast.setMessage('Sorry, your not authorized to change a Reward.', 'warning')
    );
  }

  deleteReward(pager) {
    let rewardRow = '#' + pager._id.toString();
    this.rewardService.deleteReward(pager._id).subscribe(res => {
      this.allItems = this.allItems.filter((x) => x._id !== pager._id);
      $(rewardRow).remove();
      this.toast.setMessage('item deleted successfully.', 'success');
    }, error => console.log(error)
    );
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
