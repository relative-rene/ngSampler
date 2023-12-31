import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { GainsService } from 'src/app/gains/services/gains.service';

@Component({
  selector: 'add-exercise-form',
  templateUrl: './add-exercise-form.component.html',
  styleUrls: ['./add-exercise-form.component.scss']
})
export class AddExerciseFormComponent {

  public addForm: FormGroup;
  public isLoading: Boolean = false;
  public movementList = ['Isometric', 'Eccentric', 'Concentric']

  constructor(
    private formBuilder: FormBuilder,
    private gainsService: GainsService) {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      muscle_group: ['', Validators.required],
      movements: this.formBuilder.array([], Validators.required)
    });
  }

  handleMovementChanges(e: any) {
    let movemoventArr = this.addForm.get('movements') as FormArray;
    if (e.target.checked) {
      movemoventArr.push(new FormControl(e.target.value));
      return;
    } else {
      movemoventArr.controls.forEach((l: any, i) => {
        if (l.value == e.target.value) {
          movemoventArr.removeAt(i);
          return;
        }
      })
    }
  }

  onSubmitExercise() {
    this.gainsService
      .addExercise(this.addForm.value)
      .subscribe(res => console.log('res', res))
  }
}
