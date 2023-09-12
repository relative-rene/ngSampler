import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GainsService {

  constructor(private httpClient: HttpClient) { }

  logExercise(id) {
    this.httpClient.get(`/profile/${id}/logs`);
  }
  addProfile(data) {
    this.httpClient.post('/add_user', data);
  }
  getProfile(id){
    this.httpClient.get(`/user/${id}`)
  }
  addExercise(data) {
    this.httpClient.post('/add_exercise', data);
  }
  addLog(data) {
    this.httpClient.post('/add_log', data);
  }

}

