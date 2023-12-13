import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from './modmenu/menu.module';

import { RestaurantComponent } from './app.component';

import { InfoComponent } from './cmpinfo/info.component';
import { MapComponent } from './cmpmap/map.component';
import { ContactUsComponent } from './cmpcontact-us/contact-us.component';
import { MessageService } from './_services/message.service';
import { DrinksService } from './_services/drinks.service';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MenuModule,
    AppRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: process.env.GOOGLE_MAP
    // })
  ],
  declarations: [
    RestaurantComponent,
    InfoComponent,
    ContactUsComponent,
    MapComponent
  ],
  providers: [MessageService, DrinksService],
})

export class RestaurantModule { }
