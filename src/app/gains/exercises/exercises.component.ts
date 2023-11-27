import { Component } from '@angular/core';
import { GainsService } from '../services/gains.service';

@Component({
  selector: 'exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {
  constructor(public gainsService: GainsService) { }

}