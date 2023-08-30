import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GIPHY_API } from '../constants';

@Injectable()
export class GiphyClientService {
  searchLink = 'http://api.giphy.com/v1/gifs/search?' + GIPHY_API;
  constructor(private http: HttpClient) { }
  getGiphySearch(ev) {
    const query: string = this.searchLink + ev;
    return this.http.get(query);
  }
  
}
