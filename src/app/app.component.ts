import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngSampler';

  applicationsList = ['Arsenal','Credible','CS User','Employee 360', 'Firebase Chat', 'Full Crud', 'Google Maps','Hacker News', 'SoundCloud', 'Oauth', 'Restaurant','Scroll Options', 'Shopping Cart', 'TDD'];
}
