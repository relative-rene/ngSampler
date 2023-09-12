import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GainsComponent } from './gains.component';
import { AppRoutingModule } from '../gains/app-routing.module';
import { AddExercisesComponent } from './add-exercises/add-exercises.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddExerciseLogComponent } from './add-exercise-log/add-exercise-log.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FfmiComponent } from './ffmi/ffmi.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GainsComponent,
    ExercisesComponent,
    AddExercisesComponent,
    AddUserComponent,
    AddExerciseLogComponent,
    ExercisesComponent,
    FfmiComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})

export class GainsModule { }
