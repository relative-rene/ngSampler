import { Component } from '@angular/core';
import { GainsService } from '../services/gains.service';
import { Observable } from 'rxjs';
import { IexerciseCollection } from '../annotations/gains.interface';

@Component({
  selector: 'exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {
  public $exerciseList!: Observable<IexerciseCollection[]>;
  constructor(private gainsService: GainsService) { }

  ngOnInit() {
    this.$exerciseList = this.gainsService.getExercises();
  }
}
