import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'add-exercise-log',
  templateUrl: './add-exercise-log.component.html',
  styleUrls: ['./add-exercise-log.component.scss']
})
export class AddExerciseLogComponent {
  public exerciseLog: FormGroup;

  constructor(private formBuilder: FormBuilder, private gainsService: GainsService) {
    this.exerciseLog = this.formBuilder.group({
      set_for_session: ['', Validators.required],
      total_reps_for_session: ['', Validators.required],
      session_weight: ['', Validators.required],
      date_of_session: ['', Validators.required],
      exercise_pr: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  addLog() {
    this.exerciseLog;
  }

}
