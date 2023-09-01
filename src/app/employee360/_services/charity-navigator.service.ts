import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// The RxJS library is quite large. Size matters when we build a production application and deploy it to mobile devices.
// We should include only those features that we actually need.
import 'rxjs/add/operator/map';
// import 'rxjs'; // Or we can pull in the full set of operators:

@Injectable()
export class CharityNavigatorService {

  constructor(private http: HttpClient) {
    console.log('CharityNavigatorService Initialized...');
  }

  getCharities(term) {
    // console.log('SERVICE->getCharities',);
    // return observable
    return this.http.get('/api/search/' + term)
      // transform the items emitted by an Observable by applying a function to each item
  }

  getCharitiesByCategory(categoryid) {
    return this.http.get('/api/search/category/' + categoryid)
  }

  getCharityDetail(orgid) {
    return this.http.get('/api/charity/' + orgid)
      // transform the items emitted by an Observable by applying a function to each item
  }

  getCategories() {
    console.log('environment', );
    // console.log('SERVICE->getCategories',);
    // return observable
    return this.http.get('/api/categories')
  }
}
