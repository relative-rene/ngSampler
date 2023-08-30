import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';

import 'rxjs/add/operator/map';

@Injectable()
export class SuggestionsService {

  constructor(private http: HttpClient) {
  }
  list() {
    return this.http.get('/api/suggestions').map(res => {
      return res;
    });
  }
  delete(id) {
    var url = '/api/suggestions/' + id;
    return this.http
      .delete(url)
      .map(res => {
        return res;
      });
  }
  create(data) {
    return this.http
      .post('/api/suggestions', data)
      .map((res) => {
        return res;
      });
  }
}
