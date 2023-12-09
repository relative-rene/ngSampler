import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsComponent } from './app.component';

// import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    FormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyBWZSPWwSlUyymW8yy3zrrcemAUC6e2NrY"
    // })
  ],
  providers: [],
  declarations: [ GoogleMapsComponent ],
  bootstrap: [ GoogleMapsComponent ]
})
export class GoogleMapModule {}
