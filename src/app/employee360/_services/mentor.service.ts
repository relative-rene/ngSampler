import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';

import 'rxjs/add/operator/map';


@Injectable()
export class MentorService {

  constructor(private http: HttpClient) {
    console.log('MentorService Initialized...');
  }
  getMentors() {
    return this.http.get('/api/mentors/search');

  }
  deleteMentor(id) {
    return this.http.delete('/api/mentors/' + id);
  }

  createMentor(data) {
    return this.http.post(`/api/mentors/create`, JSON.stringify(data));
  }

  findById(id) {
    return this.http.get('/api/mentors/' + id);

  }
  updateMentor(id, data) {
    return this.http.put('/api/mentors/' + id, data);
  }
}
