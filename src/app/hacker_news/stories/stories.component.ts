import { Component, OnInit } from '@angular/core';
import { BiasnewsApiService } from '../services/biasnews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  providers: [BiasnewsApiService]
})
export class StoriesComponent implements OnInit {
  items: number[];

  constructor(private biasNewsService: BiasnewsApiService) {
    this.items = new Array(30);
  }

  ngOnInit() {
    this.biasNewsService.fetchArticles()
      .subscribe(
        items => this.items = items,
        error => console.log('Error fetching Article ', error),
        () => console.log('complete', this.items));
  }
}
