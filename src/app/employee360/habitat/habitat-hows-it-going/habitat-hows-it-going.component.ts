import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { ToastComponent } from '../../shared/toast/toast.component';

@Component({
  selector: 'app-habitat-hows-it-going',
  templateUrl: './habitat-hows-it-going.component.html',
  styleUrls: ['./habitat-hows-it-going.component.css'],
  providers: [UserService]
})
export class HabitatHowsItGoingComponent implements OnInit {
  private points = {};
  private session = JSON.parse(sessionStorage.getItem('currentUser'));


  constructor(private userService: UserService, private toast: ToastComponent) {
    this.userService.getById(this.session.id).subscribe(res => {
      this.points = res.points;
    });
  }
  ngOnInit() {
  }

  earnSurveyPts() {
    const points = this.points;
    points['surveyPts'] = JSON.stringify(+points['surveyPts'] + 50);
    points['totalPts'] = JSON.stringify(+points['totalPts'] + 50);
    let data = { 'points': points };
    this.userService.updateById(this.session.id, data).subscribe(res =>
      this.toast.setMessage('Well done, you have earned 50 Survey Points', 'success'));
  }

}
