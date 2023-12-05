import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './application_components/menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  {
    path: 'arsenal',
    loadChildren: () => import('../../src/app/arsenal/app.module').then(x => x.ArsenalModule)
  },  
  {
    path: 'gains',
    loadChildren: () => import('../../src/app/gains/app.module').then(x => x.GainsModule)
  },
  // {
  //   path: 'credible',
  //   loadChildren: () => import('../../src/app/credible/app.module').then(x => x.CredibleModule) // config api
  // },
  {
    path: 'cs_user',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  // {
  //   path: 'employee_360',
  //   loadChildren: () => import('../../src/app/employee360/app.module').then(x => x.Employee360Module)
  // },
  // {
  //   path: 'firebase_chat',
  //   loadChildren: () => import('../../src/app/firebase_chat/ts/app').then(x => x.ChatAppModule) typescript version missmatch
  // },
  {
    path: 'full_crud',
    loadChildren: () => import('../../src/app/full_crud/app.module').then(x => x.FullCrudModule)
  },
  {
    path: 'google_maps',
    loadChildren: () => import('../../src/app/cs_user/app.module').then(x => x.CSUserModule)
  },
  {
    path: 'hacker_news',
    loadChildren: () => import('../../src/app/hacker_news/app.module').then(x => x.HackerNewsModule)
  },
  // {
  //   path: 'soundcloud',
  //   loadChildren: () => import('../../src/app/ngrx_soundcloud/app/app.module').then(x => x.SoundCloudModule) version missmatch must rewrite with newer library
  // },
  {
    path: 'oauth',
    loadChildren: () => import('../../src/app/oauth/app.module').then(x => x.OAuthModule)
  },
  // {
  //   path: 'restaurant',
  //   loadChildren: () => import('../../src/app/restaurant/app.module').then(x => x.RestaurantModule) Broken Need new carosel approach
  // },
  {
    path: 'scroll_options',
    loadChildren: () => import('../../src/app/scroll_options/app.module').then(x => x.ScrollOptionsModule)
  },
  {
    path: 'shopping_cart',
    loadChildren: () => import('../../src/app/shopping_cart/app.module').then(x => x.ShoppingCartModule)
  },
  {
    path: 'tdd',
    loadChildren: () => import('../../src/app/tdd/app.module').then(x => x.TDDModule)
  },
  {
    path: 'acg',
    loadChildren: () => import('../../src/app/acg/app.module').then(x => x.AcgModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('../../src/app/login/app.module').then(x => x.LoginModule)
  // },
  {
    path: 'counter',
    loadChildren: () => import('../../src/app/counter/app.module').then(x => x.CounterModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
