import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hacker_news',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class HackerNewsComponent {
  title = 'app works!';
}
