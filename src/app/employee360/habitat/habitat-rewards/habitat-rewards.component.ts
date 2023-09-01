import { Component } from '@angular/core';
import { ToastComponent } from '../../shared/toast/toast.component';
import { RewardService } from '../../_services/reward.service';
import { RewardPaginationService } from '../../_services/reward-pagination.service';
import { UserService } from '../../_services/user.service';
import { ReceiptService } from '../../_services/receipt.service';
import 'rxjs/add/operator/map';

declare let $: any;

@Component({
  selector: 'app-habitat-rewards',
  templateUrl: './habitat-rewards.component.html',
  styleUrls: ['./habitat-rewards.component.css'],
  providers: [RewardService, ReceiptService, UserService, RewardPaginationService]

})
export class HabitatRewardsComponent {
  // The Array of Object, pulled from rewards collection
  private allItems: any[];
  // Individual userProfiles
  public pager: any = {};
  // allItems setting pager
  public pagedItems: any[];
  // complete user info
  // user points
  private points = {};
  public user = sessionStorage.getItem('currentUser') || ''; 
  private session = JSON.parse(this.user);
  constructor(
    private receiptService: ReceiptService,
    private pagerService: RewardPaginationService,
    private rewardService: RewardService,
    private userService: UserService,
    private toast: ToastComponent) {
    this.rewardService.getRewards()
      .subscribe(res => {
        this.allItems = res;
        this.setPage(1);
      });
    this.userService.getById(this.session.id).subscribe(res => {
      this.user = res;
      this.points = this.user['points'];
      if (this.points === undefined) {
        this.points = {};
      }
    });
  }

  redeemReward(reward, total) {
    console.log(reward.points, total);
    if (reward.points > total) {
      $('#earnmorepoints').modal('show');
        return;
    }
    
    const points = this.points;
    const cost = reward.points;
    const receipt = {
      receiptType: 'Rewards',
      rewardId: reward._id,
      rewardName: reward.name,
      userId: this.session.id,
      username: this.session.username,
      cost: reward.points.toString(),
      status: 'Pending',
      createDate: new Date()
    };

    this.receiptService.createReceipt(receipt).subscribe(res => res);

    points['totalPts'] = JSON.stringify(+points['totalPts'] - +cost);
    // This deducts the point difference from user totalPts
    let data = { 'points': points };
    this.userService.updateById(this.session.id, data).subscribe(res => res);
    $('#rewardredeemconfirmation').modal('show');
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

  // affordabilityCheck(cost, total) {
  //   let result = +total - cost;
  //   if (result >= 0) {
  //     return 'Redeem Reward';
  //   } else {
  //     console.log('that was negative', result);
  //     return result.toString().slice(1, ) + ' More Points';
  //   }
  // }

}
