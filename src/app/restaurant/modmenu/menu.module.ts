import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { BrunchComponent} from './cmpbrunch/brunch.component';
import { EntreesComponent } from './cmpentrees/entrees.component';
import { SidesComponent } from './cmpsides/sides.component';
import { SmallDishesComponent } from './cmpsmall-dishes/small-dishes.component';
// import { CarouselComponent } from './cmpcarousel/carousel.component';
import { SlideComponent } from './cmpcarousel/slide/slide.component';

@NgModule({
  imports:[
    MenuRoutingModule
  ],
  declarations:[
    MenuComponent,
    SmallDishesComponent,
    SidesComponent,
    EntreesComponent,
    BrunchComponent,
    // CarouselComponent,
    SlideComponent
  ],
})
export class MenuModule { }
