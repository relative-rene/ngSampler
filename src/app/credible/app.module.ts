import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { CredibleComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { CardAnchorComponent } from './card-anchor/card-anchor.component';
import { TerminalComponent } from './terminal/terminal.component';
import { FooterComponent } from './footer/footer.component';
import { CardSvgCircleComponent } from './card-svg-circle/card-svg-circle.component';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { GiphyClientService } from './services/giphy-client.service';
import { JwtInterceptor } from './services/jwt.service';
import { ErrorInterceptor } from './services/error-interceptor.service';
import { AuthGuard } from './services/authguard.service';

@NgModule({
  declarations: [
    CredibleComponent,
    ToolbarComponent,
    HighlightCardComponent,
    SmallCardComponent,
    CardAnchorComponent,
    TerminalComponent,
    FooterComponent,
    CardSvgCircleComponent,
    GiphySearchComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GiphyClientService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard
  ],
})
export class CredibleModule { }
