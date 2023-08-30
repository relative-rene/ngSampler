import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-svg-circle',
  templateUrl: './card-svg-circle.component.html',
  styleUrls: ['./card-svg-circle.component.scss']
})
export class CardSvgCircleComponent implements OnInit {
  @Input() hLinks;
  constructor() { }

  ngOnInit(): void {
  }

}
