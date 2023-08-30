import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public title = "biasNews";
  public iconRelativePath = "../../assets/news.jpeg";
  public imgWidth = "40";
  constructor() { }

  ngOnInit(): void {
  }

}
