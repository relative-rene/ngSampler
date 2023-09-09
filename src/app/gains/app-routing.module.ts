import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GainsComponent } from './gains.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddExercisesComponent } from './add-exercises/add-exercises.component';
import { ExercisesComponent } from './exercises/exercises.component';

const routes: Routes = [
  {
    path: '', component: GainsComponent, children: [
      { path: 'add_user', component: AddUserComponent },
      { path: 'exercises_list', component: ExercisesComponent },
      { path: 'add_exercises', component: AddExercisesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
