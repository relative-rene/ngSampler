import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './cmpinfo/info.component';
import { ContactUsComponent } from './cmpcontact-us/contact-us.component';

const appRoutes: Routes = [
  { path: 'menu', loadChildren: ()=> import ('./modmenu/menu.module').then(x=> x.MenuModule) },
  { path: 'info', component: InfoComponent},
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
