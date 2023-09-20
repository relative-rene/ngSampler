import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { GainsService } from 'src/app/gains/services/gains.service';
import { IexerciseCollection } from '../annotations/gains.interface';

@Component({
  selector: 'add-exercises',
  templateUrl: './add-exercises.component.html',
  styleUrls: ['./add-exercises.component.scss']
})
export class AddExercisesComponent {
  public addForm: FormGroup;
  public isLoading: Boolean = false;
  public $exerciseList!: Observable<IexerciseCollection[]>;
  public movementList = ['Isometric','Eccentric','Concentric']

  constructor(
    private formBuilder: FormBuilder,
    private gainsService: GainsService) {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      muscle_group: ['', Validators.required],
      movements: this.formBuilder.array([], Validators.required)
    });
  }
  handleMovementChanges(e:any){
    console.log(e)
    let movemoventArr = this.addForm.get('movements') as FormArray;
    if(e.target.checked){
      movemoventArr.push(new FormControl(e.target.value));
      return;
    }else{
      movemoventArr.controls.forEach((l:any, i)=>{
        if(l.value== e.target.value){
          movemoventArr.removeAt(i);
          return;
        }
      })
    }
  }
  onSubmitExercise() {
    console.log(this.movementList)
    this.gainsService
    .addExercise(this.addForm.value)
      .subscribe(res => console.log('res', res))
  }

  getExercises() {
    this.$exerciseList = this.gainsService.getExercises();
  }

  ngOnInit(): void {
    this.getExercises();
  }

}