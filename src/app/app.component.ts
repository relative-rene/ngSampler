import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngSampler';
constructor(private router:Router){}
  applicationsList = [{name:'Arsenal', path:'arsenal'},{name:'Credible',path:'credible'},{name:'CS User',path:'cs_user'},{name:'Employee 360',path:'employee_360'},{name:'Firebase Chat',path:"firebase_chat"},{name:'Full Crud',path:'full_crud'},{name:'Google Maps',path:'google_maps'},{name:'Hacker News',path:'hacker_news'}, {name:'SoundCloud', path:'soundcloud'},{name:'Oauth',path:'oauth'},{name:'Restaurant',path:'restaurant'},{name:'Scroll Options',path:'scroll_options'}, {name:'Shopping Cart', path:'shopping_cart'},{name:'TDD',path:'tdd'}];

  navigateTo(path){ 
    this.router.navigate([path]);
  }
}
