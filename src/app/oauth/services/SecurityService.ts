﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from '../app.constants';
import { Router } from '@angular/router';
import { map } from 'rxjs';
@Injectable()
export class SecurityService {

    private actionUrl: string;
    private headers: HttpHeaders;
    private storage: any;

    constructor(private _http: HttpClient, private _configuration: Configuration, private _router: Router) {

        this.actionUrl = _configuration.Server + 'api/DataEventRecords/';

        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.storage = localStorage;

        if (this.retrieve("IsAuthorized") !== "") {
            this.HasAdminRole = this.retrieve("HasAdminRole");
            this.IsAuthorized = this.retrieve("IsAuthorized");
        }
    }

    public IsAuthorized: boolean;
    public HasAdminRole: boolean;

    public GetToken(): any {
        return this.retrieve("authorizationData");
    }

    public ResetAuthorizationData() {
        this.store("authorizationData", "");
        this.store("authorizationDataIdToken", "");

        this.IsAuthorized = false;
        this.HasAdminRole = false;
        this.store("HasAdminRole", false);
        this.store("IsAuthorized", false);
    }

    public SetAuthorizationData(token: any, id_token:any) {
        if (this.retrieve("authorizationData") !== "") {
            this.store("authorizationData", "");
        }

        this.store("authorizationData", token);
        this.store("authorizationDataIdToken", id_token);
        this.IsAuthorized = true;
        this.store("IsAuthorized", true);

        var data: any = this.getDataFromToken(token);
        // for (var i = 0; i < data.role.length; i++) {
        //     if (data.role[i] === "dataEventRecords.admin") {
        //         this.HasAdminRole = true;
        //         this.store("HasAdminRole", true)
        //     }
        // }
    }

    public Authorize() {
        this.ResetAuthorizationData();

        console.log("BEGIN Authorize, no auth data");

        var authorizationUrl = 'https://localhost:44345/connect/authorize';
        var client_id = 'js.ng2';
        var redirect_uri = 'http://localhost:3000';
        var response_type = "id_token token";
        var scope = "openid";
        var nonce = "N" + Math.random() + "" + Date.now();
        var state = Date.now() + "" + Math.random();

        this.store("authStateControl", state);
        this.store("authNonce", nonce);
        console.log("AuthorizedController created. adding myautostate: " + this.retrieve("authStateControl"));

        var url =
            authorizationUrl + "?" +
            "response_type=" + encodeURI(response_type) + "&" +
            "client_id=" + encodeURI(client_id) + "&" +
            "redirect_uri=" + encodeURI(redirect_uri) + "&" +
            "scope=" + encodeURI(scope) + "&" +
            "nonce=" + encodeURI(nonce) + "&" +
            "state=" + encodeURI(state);

        window.location.href = url;
    }

    public AuthorizedCallback() {
        console.log("BEGIN AuthorizedCallback, no auth data");
        this.ResetAuthorizationData();

        var hash = window.location.hash.substr(1);

        var result: any = hash.split('&').reduce(function (result, item) {
            var parts = item.split('=');
            result[parts[0]] = parts[1];
            return result;
        }, {});

        console.log(result);
        console.log("AuthorizedCallback created, begin token validation");

        var token = "";
        var id_token = "";
        var authResponseIsValid = false;
        if (!result.error) {

            if (result.state !== this.retrieve("authStateControl")) {
                console.log("AuthorizedCallback incorrect state");
            } else {

                token = result.access_token;
                id_token = result.id_token

                var dataIdToken: any = this.getDataFromToken(id_token);
                console.log(dataIdToken);

                // validate nonce
                if (dataIdToken.nonce !== this.retrieve("authNonce")) {
                    console.log("AuthorizedCallback incorrect nonce");
                } else {
                    this.store("authNonce", "");
                    this.store("authStateControl", "");

                    authResponseIsValid = true;
                    console.log("AuthorizedCallback state and nonce validated, returning access token");
                }
            }
        }

        if (authResponseIsValid) {
            this.SetAuthorizationData(token, id_token);
            console.log(this.retrieve("authorizationData"));

            // router navigate to DataEventRecordsList
            console.log('router befor:', this._router.url);
            this._router.navigate(['authorized']);
            //window.location.href = "http://localhost:3000/authorized"
            console.log('router after:', this._router.url);
        }
        else {
            this.ResetAuthorizationData();
            this._router.navigate(['/unauthorized']);
        }
    }

    public Logoff() {
        // /connect/endsession?id_token_hint=...&post_logout_redirect_uri=https://myapp.com
        console.log("BEGIN Authorize, no auth data");

        var authorizationUrl = 'https://localhost:44345/connect/endsession';

        var id_token_hint = this.retrieve("authorizationDataIdToken");
        var post_logout_redirect_uri = 'https://localhost:44311/Unauthorized.html';

        var url =
            authorizationUrl + "?" +
            "id_token_hint=" + encodeURI(id_token_hint) + "&" +
            "post_logout_redirect_uri=" + encodeURI(post_logout_redirect_uri);

        this.ResetAuthorizationData();

        window.location.href = url;
    }

    public HandleError(error: any) {
        console.log(error);
        if (error.status == 403) {
            this._router.navigate(['/Forbidden'])
        }
        else if (error.status == 401) {
            this.ResetAuthorizationData();
            this._router.navigate(['/Unauthorized'])
        }
    }

    private urlBase64Decode(str) {
        var output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }

        return window.atob(output);
    }

    private getDataFromToken(token) {
        var data = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            data = JSON.parse(this.urlBase64Decode(encoded));
        }

        return data;
    }

    private retrieve(key: string): any {
        var item = this.storage.getItem(key);

        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }

        return;
    }

    private store(key: string, value: any) {
        this.storage.setItem(key, JSON.stringify(value));
    }

}