import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { DashboardService } from '../application_services/dashboard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  constructor(public router: Router, public dashboardService: DashboardService) { }
  public applicationsList = [
    { name: 'Arsenal', path: 'arsenal' },
    { name: 'Gains', path: 'gains' },
    { name: 'Credible', path: 'credible' },
    { name: 'CS User', path: 'cs_user' },
    { name: 'Employee 360', path: 'employee_360' },
    { name: 'Firebase Chat', path: "firebase_chat" },
    { name: 'Full Crud', path: 'full_crud' },
    { name: 'Google Maps', path: 'google_maps' },
    { name: 'Hacker News', path: 'hacker_news' },
    { name: 'SoundCloud', path: 'soundcloud' },
    { name: 'Oauth', path: 'oauth' },
    { name: 'Restaurant', path: 'restaurant' },
    { name: 'Scroll Options', path: 'scroll_options' },
    { name: 'Shopping Cart', path: 'shopping_cart' },
    { name: 'TDD', path: 'tdd' },
    { name: 'ACG', path:'acg'}
  ];

  navigateTo(path) {
    this.router.navigate([path]);
    this.dashboardService.updateHistory(path);
  }
}
