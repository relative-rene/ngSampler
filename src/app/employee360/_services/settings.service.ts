import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';

import 'rxjs/add/operator/map';

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get('/api/settings').map(res => {
      return res;
    });
  }

  updateSetting(name, stringValue) {
    var url = '/api/settings/' + name;
    var postData = {
      "settingsstring": stringValue,
      "settingsdata": {}
    };
    return this.http
      .post(url, postData)
      .map(res => {
        return res;
      });
  }
}
