import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';

@Injectable()
export class UserService {

  private usersUrl = '/api/users/';  // URL to web API

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get(this.usersUrl + id);
  }

  updateById(id: number, data) {
    // console.log('updateById', this.usersUrl + id, data);
    return this.http.put(this.usersUrl + id, data);
  }

  getUsers(params='') {
    return this.http.get(this.usersUrl + 'search?' + params);
  }

  addUser(data) {
    return this.http.post(this.usersUrl + 'create', data);
  }

  removeMentor(id: number, data) {
    return this.http.put(this.usersUrl + id, data);
  }

  getUserEmailList() {
    return this.http.get(this.usersUrl + 'lookup?filter=&maxResults=100000');
  }
}
