import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SecurityService } from './services/SecurityService';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'oauth',
    templateUrl: './app.component.html',
    standalone: true,
    providers: [SecurityService],
    imports: [RouterModule, CommonModule]

})

export class OauthComponent implements OnInit, AfterViewInit {
    settings: any;
    hash!: string;

    constructor(public securityService: SecurityService, private _router: Router) { }

    ngAfterViewInit() {
        if (this.securityService.IsAuthorized) {
            this._router.navigate(['authorized']);
        }
    }
    ngOnInit() {
        //this._router.navigate(['/authorized']);
        if (window.location.hash) {
            this.hash = window.location.hash;
            this.securityService.AuthorizedCallback();
            //console.log('router.url app.component', this._router.url);
            //this._router.navigate(['/authorized']);
            //console.log('router.url app.component', this._router.url);
            // console.log('after router.navigate', this._router);
        }
        else {
            // var authorizationUrl = 'https://localhost:44345/connect/authorize';
            // var client_id = 'js.ng2';
            // var redirect_uri = 'http://localhost:3000';
            // var response_type = "id_token";
            // var scope = "openid";
            // var state = Date.now() + "" + Math.random();
            // var nonce = "N" + Math.random() + "" + Date.now();

            // localStorage["state"] = state;

            // var url =
            //     authorizationUrl + "?" +
            //     "client_id=" + encodeURI(client_id) + "&" +
            //     "redirect_uri=" + encodeURI(redirect_uri) + "&" +
            //     "response_type=" + encodeURI(response_type) + "&" +
            //     "scope=" + encodeURI(scope) + "&" +
            //     "nonce=" + encodeURI(nonce) + "&" +
            //     "state=" + encodeURI(state);
            // window.location.href = url;
            //this.securityService.Authorize();
        }
    }

    public Login() {
        console.log("Do login logic");
        this.securityService.Authorize();
    }

    public Logout() {
        console.log("Do logout logic");
        this.securityService.Logoff();
    }

}
