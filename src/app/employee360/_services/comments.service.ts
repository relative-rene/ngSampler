import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) { }

  getApiPrefix(collName) {
    if (collName === 'posts') {
      return '/api/posting/posts';
    }
    if (collName === 'givingevents') {
      return '/api/giving/events';
    }
    if (collName === 'users') {
      return '/api/users';
    }
    return '';
  }

    getCommentById(collName, id) {
    var result = this.http.get(this.getApiPrefix(collName) + '/' + id + '/comments/'+ id);
    return result;
  }

  listAll(collName, id) {
    var result = this.http.get(this.getApiPrefix(collName) + '/' + id + '/comments');
    return result;
  }

  create(collName, id, commentData) {
    var url = this.getApiPrefix(collName) + '/' + id + '/comments';
    return this.http
      .post(url, commentData)
      .map(res => {
        return res;
      });
  }

  delete(collName, id, commentId) {
    var url = this.getApiPrefix(collName) + '/' + id + '/comments/' + commentId;
    return this.http
      .delete(url)
      .map(res => {
        return res;
      });
  }

}
