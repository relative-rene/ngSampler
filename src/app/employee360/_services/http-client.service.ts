import {Injectable} from '@angular/core';
import { HttpClient, Headers, RequestOptions, Response } from '@angular/common/http';
import { Observable }     from 'rxjs';

@Injectable()
export class HttpClient {

  constructor(private http: HttpClient) { }

  get(url) {
    // console.log('http/GET:', url, this.jwt());
    return this.http.get(url, this.jwt())
  }

  post(url, data) {
    // console.log('http/POST:', url, data, this.jwt());
    return this.http.post(url, data, this.jwt())
  }

  put(url, data) {
    console.log('http/PUT:', url, data, this.jwt());
    return this.http.put(url, data, this.jwt())
  }

  delete(url) {
    // console.log('DELETE:', url, this.jwt());
    return this.http.delete(url, this.jwt())
  }

  // private helper method
  private jwt() {
    // create authorization header with jwt token
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (currentUser.token) {
      headers.append('Authorization', currentUser.token);
      return new RequestOptions({ headers: headers });
    } else {
      return new RequestOptions({ headers: headers });
    }
  }
}
