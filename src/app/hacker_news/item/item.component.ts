import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html'
})
export class ItemComponent {
  
  constructor() { }
  @Input() itemID?: number | string;
}
