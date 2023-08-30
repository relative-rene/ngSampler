import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';

import 'rxjs/add/operator/map';

@Injectable()
export class GivingService {

  constructor(private http: HttpClient) {
  }

  listAllOpen(category, sortBy, state, filter) {
    var url = '/api/giving/events?status=open';

    if (category)
      url += "&category=" + category;
    if (state)
      url += "&state=" + state;
    if (sortBy)
      url += "&sortby=" + sortBy;
    if (filter)
      url += "&filter=" + filter;

    return this.http.get(url).map(res => {
      return res;
    });
  }
  listDashboard(filter) {
    return this.http.get('/api/giving/events?dashboard=true&filter=' + filter).map(res => {
      return res;
    });
  }
  get(id) {
    var url = '/api/giving/events/' + id;
    return this.http
      .get(url)
      .map(res => {
        return res;
      });
  }
  loadDrafts(userId) {
    return this.http
      .get('/api/giving/events?status=draft&user=' + userId)
      .map(res => {
        return res;
      });
  }
  delete(id) {
    var url = '/api/giving/events/' + id;
    return this.http
      .delete(url)
      .map(res => {
        return res;
      });
  }
  deleteFile(id, filename) {
    var url = '/api/giving/events/' + id + '/files/' + filename;
    return this.http
      .delete(url)
      .map(res => {
        return res;
      });
  }
  update(id, objFields) {
    var url = '/api/giving/events/' + id;
    return this.http
      .put(url, objFields)
      .map(res => {
        return res;
      });
  }
  create(data) {
    return this.http
      .post('/api/giving/events', data)
      .map((res) => {
        return res;
      });
  }
  fileList(id) {
    var url = '/api/giving/events/' + id + '/files';
    return this.http
      .get(url)
      .map(res => {
        return res;
      });
  }
  participate(id, index, cancelShift) {
    var url = '/api/giving/events/' + id + '/shiftreserve/' + index.toString();
    if (cancelShift)
      url += "?unflag=true";

    return this.http
      .post(url, {})
      .map(res => {
        return res;
      });
  }
  donate(id, data, removeDonation) {
    var url = '/api/giving/events/' + id + '/donate';
    if (removeDonation)
      url += "?unflag=true";

    return this.http
      .post(url, data)
      .map(res => {
        return res;
      });
  }
  getDashboardTotals() {
    var url = '/api/giving/dashboard';
    return this.http
      .get(url)
      .map(res => {
        return res;
      });
  }
  getVolunteering() {
    var url = '/api/giving/volunteering';
    return this.http
      .get(url)
      .map(res => {
        return res;
      });
  }
  getTrending() {
    var url = '/api/giving/trending';
    return this.http
      .get(url)
      .map(res => {
        return res;
      });    
  }
}
