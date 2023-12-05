import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
static apiUrl = 'localhost:3000';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<User[]>(`${UserService.apiUrl}/users`);
  }

  register(user:User){
    return this.http.post(`${UserService.apiUrl}/users/register`,user);
  }
  
  delete(id){
    return this.http.delete(`${UserService.apiUrl}/users/${id}`);
  }

}
