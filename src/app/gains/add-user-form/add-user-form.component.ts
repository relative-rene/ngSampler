import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IprofileCollection } from '../annotations/gains.interface';
import { GainsService } from '../services/gains.service';
import { ModalService } from 'src/app/application_services/modal.service';

@Component({
  selector: 'add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})

export class AddUserFormComponent implements OnInit, OnChanges {
  public userForm: FormGroup;
  public isLoading: Boolean = false;
  public $profiles!: Observable<IprofileCollection[]>;
  @Input() editUser?: IprofileCollection;

  constructor(
    private formBuilder: FormBuilder,
    private gainService: GainsService,
    public modalService: ModalService) {
    this.userForm = this.formBuilder.group({
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

  onSubmitProfile($event) {
    console.log('in onSubmitProfile', $event)
    if (this.userForm) {
      this.gainService.addProfile(this.userForm.value)
        .subscribe(res => console.log('res', res))
    }
  }

  ngOnInit(): void {
    this.$profiles = this.gainService.getProfiles();
  }

  ngOnChanges() {
    if (this.editUser) {
      let { first_name, last_name, age, exercise_list, exercise_log, weight, height, body_fat_percent, lean_body_mass, fat_free_mass_index } = this.editUser;
      this.userForm = this.formBuilder.group({
        first_name: [first_name, Validators.required],
        last_name: [last_name, Validators.required],
        age: [age, Validators.required],
        exercise_list: [exercise_list, Validators.required],
        exercise_log: [exercise_log, Validators.required],
        weight: [weight, Validators.required],
        height: [height, Validators.required],
        body_fat_percent: [body_fat_percent, Validators.required],
        lean_body_mass: [lean_body_mass, Validators.required],
        fat_free_mass_index: [fat_free_mass_index, Validators.required]
      });
    } else {
      this.userForm = this.formBuilder.group({
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
  }

}