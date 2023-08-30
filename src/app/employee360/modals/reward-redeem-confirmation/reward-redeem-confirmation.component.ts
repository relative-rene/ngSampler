import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-reward-redeem-confirmation',
  templateUrl: './reward-redeem-confirmation.component.html',
  styleUrls: ['./reward-redeem-confirmation.component.css']
})
export class RewardRedeemConfirmationComponent implements OnInit {

  constructor() { }

  onSubmit() {
    $('#rewardredeemconfirmation').modal('hide');
  }
  ngOnInit() {
  }

}
