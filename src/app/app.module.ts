import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './application_components/menu/menu.component';
import { RecentComponent } from './application_components/recent/recent.component';
import { AuthService } from './application_services/auth.service';
import { ModalService } from './application_services/modal.service';
import { DashboardService } from './application_services/dashboard.service';
import { PersistanceService } from './application_services/persistance.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RecentComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  exports:[CommonModule],
  providers: [
    AuthService,
    DashboardService,
    ModalService,
    PersistanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }