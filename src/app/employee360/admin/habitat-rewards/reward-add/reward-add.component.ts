import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RewardService } from '../../../_services/reward.service';
import { ToastComponent } from '../../../shared/toast/toast.component';

@Component({
  selector: 'app-reward-add',
  templateUrl: './reward-add.component.html',
  styleUrls: ['./reward-add.component.css'],
  providers: [RewardService]
})

export class RewardAddComponent {
  pageTitle = 'Add Reward';
  getData: string;
  postData: string;

  constructor(
    private router: Router,
    private rewardService: RewardService,
    private toast: ToastComponent) { }


  createReward(form: any) {
    this.rewardService.addReward(form)
      .subscribe(data => {
        this.toast.setMessage('item added successfully.', 'success');
          this.router.navigate(['/rewards']);
      }, error => this.toast.setMessage('Sorry, your not authorized to create a Reward.', 'warning'));
    }
}
