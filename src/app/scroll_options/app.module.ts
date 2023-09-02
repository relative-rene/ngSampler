import { AirlinesService } from './data-access/airlines.service';
import { PassengerService } from './data-access/passenger.service';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollOptionsComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HomepageComponent } from './homepage/homepage.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ScrollOptionsComponent,
    HomepageComponent,
    AirlinesComponent,
    VirtualScrollComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    ScrollingModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  providers: [PassengerService, AirlinesService],
})
export class ScrollOptionsModule { }
