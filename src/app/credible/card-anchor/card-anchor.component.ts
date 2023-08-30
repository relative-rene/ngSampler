import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-anchor',
  templateUrl: './card-anchor.component.html',
  styleUrls: ['./card-anchor.component.scss']
})
export class CardAnchorComponent implements OnInit {
  @Input() hrefLink;
  @Input() spanInfo;
  @Input() svgW;
  @Input() svgH;
  constructor() { }

  ngOnInit(): void {
  }

}
