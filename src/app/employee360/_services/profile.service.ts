import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/common/http';
import {Observable} from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  constructor(private http: Http) {

  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  listAll() {
    return this.http.get('/api/users')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUserById(id) {
    return this.http.get('/api/users/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
