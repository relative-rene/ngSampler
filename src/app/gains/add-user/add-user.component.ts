import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-users',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  public addUser: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.addUser = this.formBuilder.group({
      name: ['', Validators.required],
      movement: ['', Validators.required],
      muscle_group: ['', Validators.required]
    });
  }

  ngOnInit(): void {  }

}
