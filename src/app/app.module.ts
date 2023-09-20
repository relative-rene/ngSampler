import { DashboardService } from './application_services/dashboard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// import { ScrollOptionsModule } from './scroll_options/app.module';
// import { GoogleMapModule } from './google_maps/app.module';
// import { CSUserModule } from './cs_user/app.module';
// import { HackerNewsModule } from './hacker_news/app.module';
// import { HttpClientModule } from '@angular/common/http';
// import { Employee360Module } from './employee360';
// import { ArsenalModule } from './arsenal/app.module';
// import { CredibleModule } from './credible/app.module';
// import { ChatAppModule } from './firebase_chat/ts/app';
// import { FullCrudModule } from './full_crud/app';
// import { SoundCloudModule } from './ngrx_soundcloud/app';
// import { RestaurantModule } from './restaurant/app.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { RecentComponent } from './recent/recent.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RecentComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }