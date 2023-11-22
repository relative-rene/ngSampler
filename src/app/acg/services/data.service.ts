import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ACGService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<User[]>(`${config.apiUrl}/users`);
  }

  register(user:User){
    return this.http.post(`${config.apiUrl}/users/register`,user);
  }
  
  delete(id){
    return this.http.delete(`${config.apiUrl}/users/${id}`);
  }

}