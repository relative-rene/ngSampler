import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CSUser } from './cs_user.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AboutComponent,
    UserComponent,
    CSUser,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [PostService],
  bootstrap: [CSUser]
})
export class CSUserModule { }
