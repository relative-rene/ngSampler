import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactList } from './components/contact-list/contact-list';

const routes: Routes = [
  { path: '', component: ContactList },
  // Missed paths redirects home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
