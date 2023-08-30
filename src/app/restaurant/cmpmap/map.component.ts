import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {
  public lat:number;
  public lng:number;
  public zoom:number;

  constructor() { }

  ngOnInit() {
    this.lat = 37.7713145;
    this.lng = -122.2779036;
    this.zoom = 14;
  }
}
