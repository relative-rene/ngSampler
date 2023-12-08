import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { PageNotFoundComponent } from './pageNotFound.Component';
import { OauthComponent } from './app.component';

export const OauthRoutes: Routes = [
    {
        path: '', component: OauthComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'authorized', component: AuthorizedComponent },
            { path: 'unauthorized', component: UnauthorizedComponent },
            { path: '**', component: PageNotFoundComponent }
        ]
    }
];


