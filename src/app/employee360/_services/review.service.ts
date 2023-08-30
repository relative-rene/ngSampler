import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';

import 'rxjs/add/operator/map';

@Injectable()
export class ReviewService {
  constructor(private http: HttpClient) { }

  getReviews():any {
    return this.http.get('/api/performancereviews/search');
  }

  addReview(review) {
    return this.http.post('/api/performancereviews/create', JSON.stringify(review));
  }

  editReview(review) {
    return this.http.put(`/api/performancereviews/${review._id}`, JSON.stringify(review));
  }

  deleteReview(review) {
    return this.http.delete(`/api/performancereviews/${review._id}`);
  }

}
