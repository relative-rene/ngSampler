import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { JsonplaceholderComponent } from './jsonplaceholder/jsonplaceholder.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GuideComponent } from './guide/guide.component';
import { FooterComponent } from './footer/footer.component';
import { DlayoutComponent } from './dlayout/dlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    JsonplaceholderComponent,
    LoginComponent,
    MailComponent,
    SignupComponent,
    GuideComponent,
    FooterComponent,
    DlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ArsenalModule { }
