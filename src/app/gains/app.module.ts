import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GainsComponent } from './gains.component';
import { AppRoutingModule } from '../gains/app-routing.module';
import { AddExercisesComponent } from './add-exercises/add-exercises.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GainsComponent,
    ExercisesComponent,
    AddExercisesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class GainsModule { }
