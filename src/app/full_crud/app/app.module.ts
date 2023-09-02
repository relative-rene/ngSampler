import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {  FullCrudComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './services/data.service';

import { ToastComponent } from './shared/toast/toast.component';

const routing = RouterModule.forChild([
    { path: '',      component: HomeComponent },
    { path: 'about', component: AboutComponent }
]);

@NgModule({
  declarations: [
    FullCrudComponent,
    HomeComponent,
    AboutComponent,
    ToastComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    DataService,
    ToastComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [FullCrudComponent]
})

export class FullCrudModule { }
