import { Component, OnInit } from '@angular/core';
import {
  GivingService
} from '../../_services/giving.service';
import {
  ActivatedRoute,
  Router,
  NavigationEnd
} from '@angular/router';
import { SettingsService } from '../../_services/settings.service';

@Component({
  selector: 'app-giving-donation-receipt',
  templateUrl: './giving-donation-receipt.component.html',
  styleUrls: ['./giving-donation-receipt.component.css'],
  providers: [GivingService, SettingsService]
})
export class GivingDonationReceiptComponent implements OnInit {
  parameterSubscription;
  id: string = '';
  userId: string = '';
  opportunity: any = {
    name: '',
    endDate: '',
    donationTarget: '0',
    donations: {}
  };
  donation: any = {
    donation: 0.0,
    fee: 0.0,
    match: 0.0,
    total: 0.0
  };
  settings: any = {
  };
  tranId: any = null;

  constructor(private router: Router, private service: GivingService,
    private route: ActivatedRoute, private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.list()
      .subscribe(res => {
        this.settings = {};
        var keys = Object.keys(res);
        for (var c = 0, l = keys.length; c < l; c++)
          this.settings[keys[c]] = res[keys[c]].settingsstring;
      });

    this.parameterSubscription = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.id = params['id'];
        this.reloadData();
      }
    });
    var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.userId = currentUser.id;
  }
  getWhen() {
    return new Date(this.donation.when).toDateString();
  }
  getReceiptId() {
    if (this.tranId === null) {
      var result = Math.floor(Math.random() * 99999) + 1;
      result += 30000;
      this.tranId = "0" + result.toString();
    }
    return this.tranId;
  }
  reloadData() {
    if (this.id === '')
      return;

    this.service.get(this.id)
      .subscribe(gRes => {
        this.opportunity = gRes;
        this.donation = this.opportunity.donations[this.userId];
      });
  }
  getDonationMatchLimit() {
    var limit = Number(this.settings.adminEmployeeMatchLimitPerDonation);
    if (isNaN(limit))
      limit = 0.0;
    return limit;
  }
  getEndDate() {
    var result = new Date(this.opportunity.endDate).toDateString();
    if (result == "Invalid Date")
      return 'N/A';
    return result;
  }
  getPercentComplete() {
    var value = this.getDonationsTotal();
    var target = Number(this.opportunity.donationTarget);

    var result = value / target * 100.0;
    if (isNaN(result))
      return "0";

    return result.toFixed(0);
  }
  getDonationsTotal() {
      if (this.opportunity.donations === undefined)
        return 0;

      var keys = Object.keys(this.opportunity.donations);
      var total = 0.0;
      for (var c = 0, l = keys.length; c < l; c++) {
        total += Number(this.opportunity.donations[keys[c]].total);
      }
      return total;
    }
}
