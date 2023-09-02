import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CSUserComponent } from './cs_user.component';
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
    CSUserComponent,    
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [PostService],
  bootstrap: [CSUserComponent]
})
export class CSUserModule { }
