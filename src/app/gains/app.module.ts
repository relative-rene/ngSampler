import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../gains/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from '../application_components/ui/ui.module';

import { GainsComponent } from './gains.component';
import { FfmiComponent } from './ffmi/ffmi.component';
import { GainsService } from './services/gains.service';
import { AddUserPage } from './add-user/add-user.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { AddExercisesPage } from './add-exercises/add-exercises.component';
import { AddTaskFormComponent } from './add-taskform/add-taskform.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { AddExerciseLogComponent } from './add-exercise-log/add-exercise-log.component';
import { AddExerciseFormComponent } from './add-exercise-form/add-exercise-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GainsComponent,
    ExercisesComponent,
    AddExerciseLogComponent,
    ExercisesComponent,
    FfmiComponent,
    ProfilesComponent,
    ProfileComponent,
    AddExerciseFormComponent,
    AddExerciseFormComponent,
    AddUserFormComponent,
    AddExercisesPage,
    AddUserPage,
    TasklistComponent,
    AddTaskFormComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    UIModule
  ],
  providers: [GainsService]
})

export class GainsModule { }
