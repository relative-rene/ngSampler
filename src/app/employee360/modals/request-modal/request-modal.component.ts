import { Component, OnInit, Input } from '@angular/core';
import { ToastComponent } from '../../shared/toast/toast.component';
import { UserService } from '../../_services/user.service';
// import { UtilityService } from '../../_services/util.service';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.css'],
  providers: [UserService]
})
export class RequestModalComponent implements OnInit {
  public session = JSON.parse(sessionStorage.getItem('currentUser'));
  public profile = {};
  public newMentee = {};
  @Input() acceptableMentee: number;
  @Input() commentMessage = {};
  @Input() notification = {};

  constructor(
    private toast: ToastComponent,
    private userService: UserService) { }

  ngOnInit() {
    this.setProfile();
  }

  acceptMentee(id) {
    const menteeId = this.acceptableMentee;
    this.userService.getById(menteeId)
      .subscribe(res => {
        this.newMentee = res;
      });

    let data = {
      'menteeName': this.newMentee['firstName'] + '' + this.newMentee['lastName'],
      'menteeId': this.newMentee['_id'],
      'createDate': new Date(),
      'mentorName': this.session.username,
      'mentorId': this.session.id
    };

    // let data = this.profile['mentees'].push(mentee);
    this.userService.updateById(this.session.id, data)
      .subscribe(res => {
        console.log('it worked', res);
      });
  }

  setProfile() {
    this.userService.getById(this.session.id)
      .subscribe(res => {
        this.profile = res;
      });
  }
}
