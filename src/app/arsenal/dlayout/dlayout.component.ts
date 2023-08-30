import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dlayout',
  templateUrl: './dlayout.component.html',
  styleUrls: ['./dlayout.component.scss']
})
export class DlayoutComponent implements OnInit {
  title
  constructor() {
    this.title = "inCREDIBLE"
  }

  ngOnInit(): void {
  }

}
