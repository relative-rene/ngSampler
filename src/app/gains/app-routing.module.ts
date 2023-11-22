import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GainsComponent } from './gains.component';
import { AddUserPage } from './add-user/add-user.component';
import { AddExercisesPage } from './add-exercises/add-exercises.component';
import { AddExerciseLogComponent } from './add-exercise-log/add-exercise-log.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FfmiComponent } from './ffmi/ffmi.component';
import { TasklistComponent } from './tasklist/tasklist.component';


const routes: Routes = [
  {
    path: '', component: GainsComponent, children: [
      { path: 'add_user', component: AddUserPage },
      { path: 'add_log', component: AddExerciseLogComponent },
      { path: 'add_exercises', component: AddExercisesPage },
      { path: 'exercises', component: ExercisesComponent },
      { path: 'ffmi', component: FfmiComponent },
      { path: 'task', component: TasklistComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
