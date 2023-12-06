import { Injectable } from "@angular/core";
import { RegisterRequestInterface } from "../application_components/types/registerRequest.interface";
import { Observable, map } from "rxjs";
import { CurrentUserInterface } from "../application_components/types/currentUser.interface";
import { HttpClient } from "@angular/common/http";
import { AuthStateInterface } from '../application_components/types/authState.interface';
import { AuthResponseInterface } from "../application_components/types/authResponse.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class AuthService {
    constructor(private http:HttpClient){}

    register(data: RegisterRequestInterface):Observable<CurrentUserInterface>{
        // const url = 'https://api.realworld.io/api/users';
        const url = environment.realWorldApiUrl
        return this.http
            .post<AuthResponseInterface>(url,data)
            .pipe(map((response)=> response.user))
    }
}