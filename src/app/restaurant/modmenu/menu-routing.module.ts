import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { BrunchComponent} from './cmpbrunch/brunch.component';
import { EntreesComponent } from './cmpentrees/entrees.component';
import { SidesComponent } from './cmpsides/sides.component';
import { SmallDishesComponent } from './cmpsmall-dishes/small-dishes.component';

const menuRoutes: Routes = [
  { path: 'menu',
    component: MenuComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(menuRoutes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
