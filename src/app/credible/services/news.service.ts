import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NEWS_API } from '../constants';

@Injectable({ providedIn: 'root' })
export class NewsService {
  public bbcArticles: any = [];
  public baseUrl: string = '';

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://newsapi.org/v1/articles?';
  }
  fetchArticles() {
    this.http.get(`${this.baseUrl}source=bbc-news&sortBy=top&apiKey=${NEWS_API}`)
      .subscribe(response => this.bbcArticles = response);
  }
}
