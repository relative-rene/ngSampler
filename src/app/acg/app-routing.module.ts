import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcgComponent } from './app.component';


const routes: Routes = [
  {
    path: '', component: AcgComponent, children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
