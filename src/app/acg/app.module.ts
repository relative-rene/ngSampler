import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcgComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ACGService } from './services/acg.service';



@NgModule({
  declarations: [AcgComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[ACGService]
})
export class AcgModule { }
