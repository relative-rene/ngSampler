import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';

@Injectable()
export class NotificationsService {
  notifications: Object[] = [];
  constructor(private http: HttpClient) { }

  listAll() {
    var httpResult = this.http.get('/api/notifications/events');
    return httpResult;
  }
  listDisplay() {
    var httpResult = this.http.get('/api/notifications/events?userDisplayResult=true');
    return httpResult;
  }
  markAsSeen(id) {
    var url = '/api/notifications/events/' + id + '/seen';
    return this.http
      .post(url, {})
      .map(res => {
        return res;
      });
  }
  seenAll() {
    var url = '/api/notifications/seenall';
    return this.http
      .post(url, {})
      .map(res => {
        return res;
      });
  }
  delete(id) {
    var url = '/api/notifications/events/' + id;
    return this.http
      .delete(url)
      .map(res => {
        return res;
      });
  }

  suppressNotifications(type, recordId, clear) {
    var url = '/api/notifications/suppress/' + type + '/' + recordId;
    if (clear)
      url += '?clearFlag=true';
    return this.http
      .post(url, {})
      .map(res => {
        return res;
      });
  }

  introduceMeNotification(data) {
    return this.http
      .post('/api/notifications/mentors', data)
      .map(res => {
        return res;
      });
  }

}
