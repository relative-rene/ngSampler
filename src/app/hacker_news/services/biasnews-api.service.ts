import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BiasnewsApiService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://newsapi.org/v1/articles?';
  }
  fetchArticles(): Observable<any> {
    return this.http.get(`${this.baseUrl}source=bbc-news&sortBy=top&apiKey=` + process.env['NEWSAPI_APP_KEY'])
  }
}
