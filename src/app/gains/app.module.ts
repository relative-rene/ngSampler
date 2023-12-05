import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GainsComponent } from './gains.component';
import { AppRoutingModule } from '../gains/app-routing.module';
import { AddExercisesPage } from './add-exercises/add-exercises.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddExerciseLogComponent } from './add-exercise-log/add-exercise-log.component';
import { FfmiComponent } from './ffmi/ffmi.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileComponent } from './profile/profile.component';
import { UIModule } from '../application_components/ui/ui.module';
import { GainsService } from './services/gains.service';
import { AddExerciseFormComponent } from './add-exercise-form/add-exercise-form.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { AddUserPage } from './add-user/add-user.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { AddTaskFormComponent } from './add-taskform/add-taskform.component';

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
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UIModule
  ],
  providers: [GainsService]
})

export class GainsModule { }
