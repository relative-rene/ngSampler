import {  Input, Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../_services/transactions.service';

@Component({
  selector: 'giving-dashboard-result',
  templateUrl: './giving-dashboard-result.component.html',
  styleUrls: ['./giving-dashboard-result.component.css'],
  providers: [ TransactionsService ]
})
export class GivingDashboardResultComponent implements OnInit {
  @Input() event: any = {};
  @Input() donationTotal: any = 0.0;

  constructor(private service: TransactionsService) { }
  ngOnInit() {
  }

  getBKGImage(event) {
    if (event._id === undefined)
      return '';

    if (!event.backgroundImageUrl)
      return '';

    var r = "url(https://s3.amazonaws.com/imminent/oahu/" + event._id + "/" + event.backgroundImageUrl + ")";

    if (event.dashboardImageUrl !== undefined)
      if (event.dashboardImageUrl !== '')
        r = 'url(' + event.dashboardImageUrl + ')';
    return r;
  }
  getFundProgressWidth(event) {
    var p = this.donationTotal / Number(event.donationTarget) * 100.0;
    if (isNaN(p))
      return '0%';
    return p.toFixed(0) + "%";
  }
  getVolunteerVisible(e) {
    if (e.type !== 'volunteerOpportunity')
      return true;
    return false;
  }
  getFundRaiserVisible(e) {
    if (e.type !== 'fundRaiser')
      return true;
    return false;
  }
}
