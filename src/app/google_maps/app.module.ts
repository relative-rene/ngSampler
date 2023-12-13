import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsComponent } from './app.component';

// import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    FormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: process.env.GOOGLE_MAP
    // })
  ],
  providers: [],
  declarations: [ GoogleMapsComponent ],
  bootstrap: [ GoogleMapsComponent ]
})
export class GoogleMapModule {}
