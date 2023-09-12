import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GainsComponent } from './gains.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddExercisesComponent } from './add-exercises/add-exercises.component';
import { AddExerciseLogComponent } from './add-exercise-log/add-exercise-log.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FfmiComponent } from './ffmi/ffmi.component';


const routes: Routes = [
  {
    path: '', component: GainsComponent, children: [
      { path: 'add_user', component: AddUserComponent },
      { path: 'add_log', component: AddExerciseLogComponent },
      { path: 'add_exercises', component: AddExercisesComponent },
      { path: 'exercises', component: ExercisesComponent },
      { path: 'ffmi', component: FfmiComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
