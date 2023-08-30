import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {
  userChoice = null;
  svgDPath = "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z";

  @Input() cardSpan: string = "New Component";
  @Input() selectable: string = ""


  constructor() { }

  ngOnInit(): void {
  }

  selected(key) {
    this.userChoice = key;
  }

}
