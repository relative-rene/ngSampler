import { Component, OnInit} from '@angular/core';
import { UserService } from '../../_services/user.service';

declare let $: any;

@Component({
  selector: 'app-become-mentor',
  templateUrl: './become-mentor.component.html',
  styleUrls: ['./become-mentor.component.css'],
  providers: [UserService]
})
export class BecomeMentorComponent implements OnInit {

  public userStorage = sessionStorage.getItem('currentUser') || ''; 
  private session = JSON.parse(this.userStorage);
  private user: Object = {};


  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getById(this.session.id).subscribe((res) => {
      this.user = res;
    });
  }

  onSubmit(form: any) {
    form.mentorStatus = 'Pending';
    console.log('form', form);
    this.userService.updateById(this.session.id, form)
      .subscribe((res) => {
        if (res) {
          $('#become-mentor').modal('hide');
        }
      });
  }
}
