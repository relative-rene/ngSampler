import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {

  }
  listAll() {
    return this.http.get('/api/users')
  }

  getUserById(id) {
    return this.http.get('/api/users/' + id)
  }
}
