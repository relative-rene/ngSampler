import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GainsService } from 'src/app/services/gains.service';

@Component({
  selector: 'add-exercises',
  templateUrl: './add-exercises.component.html',
  styleUrls: ['./add-exercises.component.scss']
})
export class AddExercisesComponent {
  public addForm: FormGroup;
  public isLoading: Boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private gainsService: GainsService) {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      movement: ['', Validators.required],
      muscle_group: ['', Validators.required]
    });
  }

  onSubmitExercise() {
    console.log(this.addForm.value)
    // this.gainsService.addExercise();
  }

  ngOnInit(): void { }

}