import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
// import { SoundCloudModule } from './ngrx_soundcloud/app/app.module';
// import { Employee360Module } from './employee360/app.module';
// import { CSUserModule } from './cs_user/app.module';
// import { CSUserComponent } from './cs_user/cs_user.component';
// import { AppComponent } from './app.component';
// import { CredibleComponent } from './credible/app.component';
// import { ArsenalComponent } from './arsenal/app.component';
// import { Employee360Component } from './employee360';
// import { GoogleMapsComponent } from './google_maps';
// import { HackerNewsComponent } from './hacker_news/app.component';
// import { SoundCloudComponent } from './ngrx_soundcloud/app/components/app';
// import { FullCrudComponent } from './full_crud/app.component';
// import { OauthComponent } from './oauth/app.component';
// import { RestaurantComponent } from './restaurant/app.component';
// import { ScrollOptionsComponent } from './scroll_options/app.component';
// import { TDDComponent } from './tdd/app.component';


const routes: Routes = [
  { path: '', component: MenuComponent},
  {
    path: 'arsenal',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'credible',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'cs_user',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'employee_360',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'firebase_chat',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'full_crud',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'google_maps',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'hacker_news',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'soundcloud',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'oauth',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'scroll_options',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'shopping_cart',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
  path: 'tdd',
  loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
},
  // {
  //   path: 'credible',
  //   loadChildren: () => import('../../src/app/credible/app.module').then(x => x.CredibleModule)
  // },
  // {
  //   path: 'employee_360',
  //   loadChildren: () => import('../../src/app/employee360/app.module').then(x => x.Employee360Module)
  // },
  
  // {
  //   path: 'hacker_news',
  //   loadChildren: () => import('../../src/app/hacker_news/app.module').then(x => x.HackerNewsModule)
  // },

  // {
  //   path: 'soundcloud',
  //   loadChildren: () => import('../../src/app/ngrx_soundcloud/app/app.module').then(x => x.SoundCloudModule)
  // },
  // {
  //   path: 'oauth',
  //   loadChildren: () => import('../../src/app/oauth/app.module').then(x => x.OauthMo)
  // },
  // {
  //   path: 'restaurant',
  //   loadChildren: () => import('../../src/app/restaurant/app.module').then(x => x.RestaurantModule)
  // },
  // {
  //   path: 'scroll_options',
  //   loadChildren: () => import('../../src/app/scroll_options/app.module').then(x => x.ScrollOptionsModule)
  // },
  // {
  //   path: 'shopping_cart',
  //   loadChildren: () => import('../../src/app/shopping_cart/app.module').then(x => x.ShoppingCartModule)
  // },
  // {
  //   path: 'tdd',
  //   loadChildren: () => import('../../src/app/tdd/app.module').then(x => x.TDDModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
