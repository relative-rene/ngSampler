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
import { GainsModule } from './gains/app.module';
import { FfmiComponent } from './gains/ffmi/ffmi.component';
import { UserComponent } from './user/user.component';
import { AddExerciseLogComponent } from './gains/add-exercise-log/add-exercise-log.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RecentComponent,
    FfmiComponent,
    UserComponent,
    AddExerciseLogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    GainsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }