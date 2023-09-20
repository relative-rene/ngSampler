import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GainsService } from 'src/app/gains/services/gains.service';
import { IprofileCollection } from '../annotations/gains.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'add-users',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  public addUser: FormGroup;
  public isLoading: Boolean = false;
  public $profiles!: Observable<IprofileCollection[]>;

  constructor(
    private formBuilder: FormBuilder, 
    private gainService: GainsService) {
    this.addUser = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      exercise_list: ['', Validators.required],
      exercise_log: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      body_fat_percent: ['', Validators.required],
      lean_body_mass: ['', Validators.required],
      fat_free_mass_index: ['', Validators.required]
    });
  }

  onSubmitProfile() {
    this.gainService.addProfile(this.addUser.value)
      .subscribe(res => console.log('res', res))
  }
  
  ngOnInit(): void { 
    this.$profiles = this.gainService.getProfiles();
  }
}
