import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {
  public newUser;

  constructor(private user: UserService) { }

  addUser() {
    this.user.addNew(this.newUser);
  }
}
