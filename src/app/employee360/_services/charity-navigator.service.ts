import { Injectable } from '@angular/core';
import { Http } from '@angular/common/http';

// The RxJS library is quite large. Size matters when we build a production application and deploy it to mobile devices.
// We should include only those features that we actually need.
import 'rxjs/add/operator/map';
// import 'rxjs/Rx'; // Or we can pull in the full set of operators:

@Injectable()
export class CharityNavigatorService {

  constructor(private http: Http) {
    console.log('CharityNavigatorService Initialized...');
  }

  getCharities(term) {
    // console.log('SERVICE->getCharities',);
    // return observable
    return this.http.get('/api/search/' + term)
      // transform the items emitted by an Observable by applying a function to each item
      .map(res => res.json());
  }

  getCharitiesByCategory(categoryid) {
    return this.http.get('/api/search/category/' + categoryid)
      .map(res => res.json());
  }

  getCharityDetail(orgid) {
    return this.http.get('/api/charity/' + orgid)
      // transform the items emitted by an Observable by applying a function to each item
      .map(res => res.json());
  }

  getCategories() {
    console.log('environment', );
    // console.log('SERVICE->getCategories',);
    // return observable
    return this.http.get('/api/categories')
      .map(res => res.json());
  }
}
