import { Component, AfterViewInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { ToastComponent } from '../../shared/toast/toast.component';

declare let $: any;
@Component({
  selector: 'app-wellbeing-dashboard',
  templateUrl: './wellbeing-dashboard.component.html',
  styleUrls: ['./wellbeing-dashboard.component.css'],
  providers: [UserService]
})
export class WellbeingDashboardComponent implements AfterViewInit {
  private points = {};
  public user = sessionStorage.getItem('currentUser') || ''; 
  private session = JSON.parse(this.user);
  constructor(private userService: UserService, private toast: ToastComponent) {
    this.userService.getById(this.session.id).subscribe((res:any) => {
      this.points = res.points;
    });
  }

  ngAfterViewInit() {
    $(function() {
      $("[id$='circle']").percircle();

      $(".sprite1").hover(function() {
        $('.flyout').removeClass('hidden');
      }, function() {
        $('.flyout').addClass('hidden');
      });
      $(".sprite2").hover(function() {
        $('.flyout2').removeClass('hidden2');
      }, function() {
        $('.flyout2').addClass('hidden2');
      });
      $(".sprite3").hover(function() {
        $('.flyout3').removeClass('hidden3');
      }, function() {
        $('.flyout3').addClass('hidden3');
      });
    });
  }

  earnWellBeingPts() {
    const points = this.points;
    points['wellbeingPts'] = JSON.stringify(+points['wellbeingPts'] + 50);
    points['totalPts'] = JSON.stringify(+points['totalPts'] + 50);
    let data = { 'points': points };
    this.userService.updateById(this.session.id, data).subscribe(res =>
      this.toast.setMessage('Well done, you have earned 50 WellBeing Points', 'success'));
  }
}
