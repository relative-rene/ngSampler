import { Component } from '@angular/core';
import { DashboardService } from '../application_services/dashboard.service';

@Component({
  selector: 'recent-projects',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})

export class RecentComponent {
constructor(public dashboardService:DashboardService){}
}


