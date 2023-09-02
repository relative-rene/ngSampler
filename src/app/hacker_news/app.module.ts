import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HackerNewsComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    HackerNewsComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HackerNewsComponent]
})
export class HackerNewsModule { }
