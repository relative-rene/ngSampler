import { Component, OnInit } from '@angular/core';
import { GiphyClientService } from '../services/giphy-client.service';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html'
})

export class GiphySearchComponent implements OnInit {
  public result: any;
  public giphyUrls: string;

  constructor(private giphyClientService: GiphyClientService) { }

  ngOnInit() { }

  performSearch(e) {
    this.giphyClientService.getGiphySearch(e).subscribe(
      res => {
        this.result = res['data'];
        console.log(this.result);
      },
      err => console.log('err ', err),
      () => console.log('complete'));
  }
}
