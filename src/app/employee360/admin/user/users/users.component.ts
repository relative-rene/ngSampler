import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../../_services/user.service';


// FormBuilder is like a factory that creates FormGroup’s and FormControl’s for us.
// FormGroup represents a set of FormControls.

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  private userForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    department: [''],
    position: [''],
    permissions: ['']
  })

  private searchControl = new FormControl();

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.searchControl.valueChanges.debounceTime(500).subscribe(value => {
      console.log(value);
    });

    this.userService.getUsers().subscribe(res => {
      console.log(res);
    })
  }

  addUser(event) {
    // console.log('event: ', event);
    console.log('addUser: ', this.userForm.value);
    this.userService.addUser(this.userForm.value).subscribe(res => {
      console.log(res);

    })
  }
}
