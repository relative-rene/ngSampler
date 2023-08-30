import { Component, AfterViewInit, OnInit} from '@angular/core';
import { GivingService } from '../../_services/giving.service';
import { UserService } from '../../_services/user.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { GivingDashboardResultComponent } from '../giving-dashboard-result/giving-dashboard-result.component';
import { GivingDashboardResultSmallComponent } from '../giving-dashboard-result-small/giving-dashboard-result-small.component';
import { TransactionsService } from '../../_services/transactions.service';
declare let $: any;

@Component({
  selector: 'app-giving-dashboard',
  templateUrl: './giving-dashboard.component.html',
  styleUrls: ['./giving-dashboard.component.css'],
  providers: [GivingService, UserService, TransactionsService ]
})

export class GivingDashboardComponent implements AfterViewInit, OnInit {
  private session = JSON.parse(sessionStorage.getItem('currentUser'));
  public points = {};
  public profile = {};
  searchFilter: string = '';
  featureEvent: any = {
    hide: true
  };
  eventTotals: any  = {};

  events: any[] = [];
  totals: any = {
    allDonations: 0,
    allVolunteerHours: 0,
    userDonationTarget: 0,
    userDonations: 0,
    userMatch: 0,
    userMatchRemaining: 0,
    userVolunteerHours: 0,
    volunteerHoursTarget: 0
  };
  hideTotals: boolean = true;


  constructor(private service: GivingService,
    private userService: UserService,
    private toast: ToastComponent,
    private transService: TransactionsService) {
    this.userService.getById(this.session.id).subscribe(res => {
      this.points = res.points;
    });
  }

  ngAfterViewInit() {
    $(function() {
      $("[id$='circle']").percircle();
    });
  }
  ngOnInit() {
    this.reloadDashboard();
    this.setProfile();
  }

  setProfile() {
    this.userService.getById(this.session.id)
      .subscribe(res => {
        this.profile = res;
        this.points = res.points;
      });
  }

  reloadDashboard() {
    var filter = this.searchFilter;
    this.service.listDashboard(filter)
      .subscribe(res1 => {
        this.events = res1;

        if (this.events.length > 0) {
          var ids = [];
          for (var c = 0, l = this.events.length; c < l; c++){
            this.eventTotals[this.events[c]._id] = 0.0;
            ids.push(this.events[c]._id);
          }
          this.featureEvent = this.events[0];
          this.events.shift();

          this.transService.eventDonationTotals(ids)
            .subscribe(res => {
              for (var c = 0, l = res.length; c < l; c++) {
                this.eventTotals[res[c]._id] = res[c].total;
              }
            });
        }
      });

    this.service.getDashboardTotals()
      .subscribe(res => {
        this.totals = res;
        console.log(res);
        var me = this;
        $(function() {
          $("[id$='circle']").html('');
          $("[id$='circle']").percircle();
          me.hideTotals = false;
        });

      });
  }
  updateSearchFilter(event) {
    this.searchFilter = event.target.value;
    this.reloadDashboard();
  }


  getUserHours() {
    return this.totals.userVolunteerHours.toFixed(0);
  }
  getUserVolunteerPercentage() {
    var p = ((this.totals.userVolunteerHours / this.totals.volunteerHoursTarget) * 100.0).toFixed(0);
    return p;
  }
  getUserDonations() {
    return "$" + this.totals.userDonations.toFixed(0);
  }
  getUserMatched() {
    return "$" + this.totals.userMatch.toFixed(0);
  }
  getUserDonationPercentage() {
    var p = ((this.totals.userDonations / this.totals.userDonationTarget) * 100.0).toFixed(0);
    return p;
  }
  getUserMatchedPercentage() {
    var p = ((this.totals.userMatch / (this.totals.userMatchRemaining + this.totals.userMatch)) * 100.0).toFixed(0);
    return p;
  }
  getUserRemainingMatch() {
    return "$" + this.totals.userMatchRemaining.toFixed(0);
  }
  getUserRemainingMatchPercentage() {
    var p = ((this.totals.userMatchRemaining / (this.totals.userMatchRemaining + this.totals.userMatch)) * 100.0).toFixed(0);
    return p;
  }
}
