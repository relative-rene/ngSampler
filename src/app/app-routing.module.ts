import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CSUser } from './cs_user/cs_user.component';
import { CredibleComponent } from './credible/app.component';
import { ArsenalComponent } from './arsenal/app.component';
import { Employee360Component } from './employee360';
import { GoogleMapsComponent } from './google_maps';
import { HackerNewsComponent } from './hacker_news/app.component';
import { SoundCloudComponent } from './ngrx_soundcloud/app/components/app';
import { FullCrudComponent } from './full_crud/app';
import { OauthComponent } from './oauth/app.component';
import { RestaurantComponent } from './restaurant/app.component';
import { ScrollOptionsComponent } from './scroll_options/app.component';


const routes: Routes = [
{path:'cs_user', component:CSUser},
{path:'arsenal', component:ArsenalComponent},
{path:'credible', component:CredibleComponent},
{path:'employee360', component: Employee360Component},
{path:'firebase_chat', component:ChatAppComponent},
{path:'full_crud', component:FullCrudComponent},
{path:'goole_maps', component:GoogleMapsComponent},
{path:'hacker_news', component: HackerNewsComponent},
{path:'soundcloud', component:SoundCloudComponent},
{path:'oauth', component:OauthComponent},
{path:'restaurant', component:RestaurantComponent},
{path:'scroll_options', component: ScrollOptionsComponent},
{path:'shopping_cart', component: ShoppingCartComponent},
{path:'tdd', component:TDDComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
