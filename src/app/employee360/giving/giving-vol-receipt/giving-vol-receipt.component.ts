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
  selector: 'app-giving-vol-receipt',
  templateUrl: './giving-vol-receipt.component.html',
  styleUrls: ['./giving-vol-receipt.component.css'],
  providers: [GivingService, SettingsService]
})
export class GivingVolReceiptComponent implements OnInit {
  parameterSubscription;
  id: string = '';
  index: string = '';
  userId: string = '';
  opportunity: any = {
    name: '',
    endDate: '',
    startDate: ''
  };
  shift: any = {
    startTime: '',
    endTime: '',
    hours: 0.0
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
        this.index = params['index'];
        this.reloadData();
      }
    });
    var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.userId = currentUser.id;
  }
  getReceiptId() {
    if (this.tranId === null) {
      var result = Math.floor(Math.random() * 99999) + 1;
      result += 30000;
      this.tranId = "0" + result.toString();
    }
    return this.tranId;
  }
  getEndDate() {
    var result = new Date(this.opportunity.endDate).toDateString();
    if (result == "Invalid Date")
      return 'N/A';
    return result;
  }
  getEventDate() {
    return new Date(this.opportunity.startDate).toLocaleDateString();
  }
  formatTime(timeStr) {
    if (!timeStr)
      return '';
    var startHour = Number(timeStr.substr(0, 2));
    var startMinutes = Number(timeStr.substr(3, 2));

    var result = '';
    var minutes = '';
    if (startMinutes < 10)
      minutes = '0' + startMinutes.toString();
    else
      minutes = startMinutes.toString();

    if (startHour < 12)
      result += startHour.toString() + ':' + minutes + ' AM';
    else {
      if (startHour == 12)
        result += (startHour).toString() + ':' + minutes + ' PM';
      else
        result += (startHour - 12).toString() + ':' + minutes + ' PM';
    }
    return result;
  }
  reloadData() {
    if (this.id === '')
      return;

    this.service.get(this.id)
      .subscribe(gRes => {
        this.opportunity = gRes;
        this.shift = this.opportunity.availableShifts[this.index];
        console.log(this.shift);
      });
  }
}
