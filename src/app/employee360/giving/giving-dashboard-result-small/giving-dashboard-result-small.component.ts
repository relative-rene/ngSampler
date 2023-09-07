import {  Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'giving-dashboard-result-small',
  templateUrl: './giving-dashboard-result-small.component.html',
  styleUrls: ['./giving-dashboard-result-small.component.css']
})
export class GivingDashboardResultSmallComponent implements OnInit {
  @Input() event: {};
  @Input() donationTotal: any = 0.0;

  constructor() { }
  ngOnInit() { }

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
    //console.log(this.donationTotal);
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
