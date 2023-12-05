import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = { headers: this.headers };

  constructor(private http: HttpClient) { }

  getCats() {
    return this.http.get('/cats')
  }

  addCat(cat) {
    return this.http.post("/cat", JSON.stringify(cat), this.options);
  }

  editCat(cat) {
    return this.http.put(`/cat/${cat._id}`, JSON.stringify(cat), this.options);
  }

  deleteCat(cat) {
    return this.http.delete(`/cat/${cat._id}`, this.options);
  }
  
}
