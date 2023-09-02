import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ArsenalComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { JsonplaceholderComponent } from './jsonplaceholder/jsonplaceholder.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';
import { GuideComponent } from './guide/guide.component';
import { FooterComponent } from './footer/footer.component';
import { DlayoutComponent } from './dlayout/dlayout.component';

@NgModule({
  declarations: [
    ArsenalComponent,
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
    AppRoutingModule,
    FormsModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true })
  ],
  providers: [],
})
export class ArsenalModule { }
