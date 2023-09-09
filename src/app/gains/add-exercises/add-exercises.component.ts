import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'add-exercises',
  templateUrl: './add-exercises.component.html',
  styleUrls: ['./add-exercises.component.scss']
})
export class AddExercisesComponent {
  public addForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      body_fat_percent: ['', Validators.required],
      lean_body_mass: ['', Validators.required],
      fat_free_mass_index: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

}