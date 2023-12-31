import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users = [];
  constructor(private authenticationService: AuthenticationService, private userService: UserService) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => this.loadAllUsers());
  }
  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => this.users = users);
  }
}
