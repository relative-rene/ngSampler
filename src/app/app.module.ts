import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { ScrollOptionsModule } from './scroll_options/app.module';
// import { GoogleMapModule } from './google_maps/app.module';
// import { CSUserModule } from './cs_user/app.module';
// import { HackerNewsModule } from './hacker_news/app.module';
// import { RestaurantModule } from './restaurant/app.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostService } from './cs_user/services/post.service';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { Employee360Module } from './employee360';
// import { ArsenalModule } from './arsenal/app.module';
// import { CredibleModule } from './credible/app.module';
// import { ChatAppModule } from './firebase_chat/ts/app';
// import { FullCrudModule } from './full_crud/app';
// import { SoundCloudModule } from './ngrx_soundcloud/app';


@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    // ChatAppModule,
    // FullCrudModule,
    // SoundCloudModule,
    // HttpClientModule,
    // GoogleMapModule,
    // CSUserModule,
    // HackerNewsModule,
    // RestaurantModule,
    // ScrollOptionsModule,
    // ArsenalModule,
    // CredibleModule,
    // Employee360Module
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
