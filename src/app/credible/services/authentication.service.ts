import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject?: BehaviorSubject<User>;
  public currentUser?: Observable<User>;
  constructor(private http: HttpClient) {
    let currentUserStorage = localStorage.getItem('currentUser');
    if(currentUserStorage){
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(currentUserStorage))
    this.currentUser = this.currentUserSubject.asObservable();
    }
   }

   public get currentUserValue(): User {
     return this.currentUserSubject.value;
   }

   login(username, password){
     return this.http.post<any>(`${environment.apiUrl}/users/authenticate`,{username, password}).pipe(map(user=>{
       localStorage.setItem('currentUser', JSON.stringify(user));
       this.currentUserSubject.next(user);
       return user;
     }))
   }

   logout(){
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(null);
   }
   
}