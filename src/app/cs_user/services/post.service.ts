import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
    console.log('PostsService Initialize....');
  }
  getPost():Observable<Object> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
