import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';

import 'rxjs/add/operator/map';

@Injectable()
export class TransactionsService {

  constructor(private http: HttpClient) { }

  list(type, after, before, user) {
    var url = '/api/transactions/list?type=' + type;
    if (after)
      url += '&after=' + after;
    if (before)
      url += '&before=' + before;
    if (user)
      url += '&user=' + user;

    return this.http.get(url).map(res => {
      return res;
    });
  }
  delete(id) {
    var url = '/api/transactions/receipt/' + id;
    return this.http
      .delete(url)
      .map(res => {
        return res;
      });
  }
  donate(data) {
    var url = '/api/transactions/donate';

    return this.http
      .post(url, data)
      .map(res => {
        return res;
      });
  }
  eventTransactions(id) {
    var url = '/api/transactions/event/' + id;
    return this.http.get(url).map(res => {
      return res;
    });
  }
  approve(id) {
    var url = '/api/transactions/receipt/' + id + '/approve';
    var data = {
      status: 'Complete'
    };
    return this.http
      .post(url, data)
      .map(res => {
        return res;
      });
  }
  eventDonationTotals(ids) {
    var url = '/api/transactions/donationtotals?eventids=';
    for (var c = 0, l = ids.length; c < l; c++) {
      url += ids[c] + (c < l - 1 ? "," : "");
    }
    return this.http.get(url).map(res => {
      return res;
    });
  }
}
