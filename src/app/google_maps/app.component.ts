import { Component } from '@angular/core';

@Component({
  selector: 'google_maps',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class GoogleMapsComponent {
 lat: number = 37.7713145;
 lng: number = -122.2779036;
 title: string = "Google Maps";
}
