import { DashboardService } from './application_services/dashboard.service';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './application_components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { RecentComponent } from './application_components/recent/recent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment.prod';
import { ENVIRONMENT } from './application_services/environment.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RecentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [DashboardService, { provide: ENVIRONMENT, useValue: environment }],
  bootstrap: [AppComponent]
})
export class AppModule { }