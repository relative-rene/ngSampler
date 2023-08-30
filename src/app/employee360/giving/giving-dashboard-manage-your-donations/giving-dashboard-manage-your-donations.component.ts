import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../_services/transactions.service';

@Component({
  selector: 'app-giving-dashboard-manage-your-donations',
  templateUrl: './giving-dashboard-manage-your-donations.component.html',
  styleUrls: ['./giving-dashboard-manage-your-donations.component.css'],
  providers: [TransactionsService]
})
export class GivingDashboardManageYourDonationsComponent implements OnInit {
  donations: any[] = [];
  userId: string = '';
  donationTotal: any = 0.0;
  constructor(private service: TransactionsService) {
    var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.userId = currentUser.id;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.list('donation', '', '', this.userId)
      .subscribe(gRes => {
        this.donations = gRes;
        this.updateDonationTotal();
      });
  }
  updateDonationTotal() {
    this.donationTotal = 0.0;
    for (var c = 0, l = this.donations.length; c < l; c++) {
      if (this.donations[c].status === 'Complete')
        this.donationTotal += Number(this.donations[c].tranAmount);
    }
  }
}
