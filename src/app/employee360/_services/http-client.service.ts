import {Injectable} from '@angular/core';
import { HttpClient, Headers, RequestOptions, Response } from '@angular/common/http';
import { Observable }     from 'rxjs';

@Injectable()
export class HttpClient {

  constructor(private http: HttpClient) { }

  get(url) {
    // console.log('http/GET:', url, this.jwt());
    return this.http.get(url, this.jwt())
      .map(this.extractData)
      .catch(this.handleError);
  }

  post(url, data) {
    // console.log('http/POST:', url, data, this.jwt());
    return this.http.post(url, data, this.jwt())
      .map(this.extractData)
      .catch(this.handleError);
  }

  put(url, data) {
    console.log('http/PUT:', url, data, this.jwt());
    return this.http.put(url, data, this.jwt())
      .map(this.extractData)
      .catch(this.handleError);
  }

  delete(url) {
    // console.log('DELETE:', url, this.jwt());
    return this.http.delete(url, this.jwt())
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const status = error.status;
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
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
