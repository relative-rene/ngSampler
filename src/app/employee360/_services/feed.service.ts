import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';

@Injectable()
export class FeedService {

  constructor(private http: HttpClient) { }

  listAll() {
    var httpResult = this.http.get('/api/posting/posts');
    return httpResult;
  }

  delete(id) {
    var url = '/api/posting/posts/' + id;
    return this.http
      .delete(url)
      .map(res => {
        return res;
      });
  }

  create(summary: string, type: string, link: string, metaData: any) {
    return this.http // We get an RxJS observable object.
      .post('/api/posting/posts', {
        type: type,
        name: summary,
        summary: summary,
        link: link,
        comments: [],
        tags: [],
        metaData: metaData
      })
      .map((res) => {
        return res;
      });
  }

}
