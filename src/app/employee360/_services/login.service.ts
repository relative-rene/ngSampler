import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class LoginService {
  private loggedIn = false;

  constructor(private http: HttpClient) {
    // set token if saved in sessionStorage
    // ensure the resulting type is a boolean.
    this.loggedIn = !!sessionStorage.getItem('token');
  }

  login(username: string, password: string) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http // We get an RxJS observable object.
      .post('/api/users/auth', JSON.stringify({ username, password }), { headers }).pipe(
      map((res:any) => {
        let token = res && res.token;

        if (token) {
          sessionStorage.setItem('currentUser', JSON.stringify(res));
          this.loggedIn = true;
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }));
  }

  logout() {
    console.log('logout');
    sessionStorage.removeItem('currentUser');
    this.loggedIn = false;
  }

  create(username: string, password: string) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http // We get an RxJS observable object.
      .post('/api/users/create', JSON.stringify({ username, password }), { headers });
  }

  isLoggedIn() {
    console.log('isLoggedIn: ', this.loggedIn);
    return this.loggedIn;
  }
}
