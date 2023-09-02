import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TDDComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task/task.service';

import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TDDComponent,
    TaskComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [TaskService],
})
export class TDDModule { }
