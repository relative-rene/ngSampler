import { Component, OnInit } from '@angular/core';
import { GivingService } from '../../_services/giving.service';

@Component({
  selector: 'app-giving-dashboard-manage-volunteering',
  templateUrl: './giving-dashboard-manage-volunteering.component.html',
  styleUrls: ['./giving-dashboard-manage-volunteering.component.css'],
  providers: [GivingService]
})
export class GivingDashboardManageVolunteeringComponent implements OnInit {
  rawShifts: any[] = [];
  shifts: any[] = [];
  userId: string = '';
  totalHours: any = 0.0;
  constructor(private service: GivingService) {
    let user = sessionStorage.getItem('currentUser') || '';
    var currentUser = JSON.parse(user);
    this.userId = currentUser.id;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getVolunteering()
      .subscribe(gRes => {
        this.rawShifts = gRes;
        this.processRawShifts();
      });
  }
   formatTime(timeStr) {
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
  //split record into more then 1 where user did more then one shift
  processRawShifts() {
    this.shifts = [];
    this.totalHours = 0.0;
    for (var c = 0, l = this.rawShifts.length; c < l; c++) {
      var localShift = this.rawShifts[c];

      for (var d = 0, dl = localShift.availableShifts.length; d < dl; d++) {
        var shift = localShift.availableShifts[d];
        if (shift.participants[this.userId] !== undefined) {
          var hours = Number(shift.hours);
          if (hours > 0.0)
            this.totalHours += hours;
          this.shifts.push({
            name: localShift.name,
            when: localShift.startDate.substr(0,10) + ' ' + this.formatTime(shift.startTime),
            hours: shift.hours,
            task: shift.name,
            _id: localShift._id
          })
        }
      }
    }
  }
}
