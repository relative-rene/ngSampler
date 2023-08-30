import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jsonplaceholder',
  templateUrl: './jsonplaceholder.component.html',
  styleUrls: ['./jsonplaceholder.component.scss']
})
export class JsonplaceholderComponent implements OnInit {
  myData: Array<any>;
  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(
        res => console.log('getRes ', res),
        err => console.log('getErr ', err),
        () => console.log('complete'))
  }
  ngOnInit(): void {
  }


}

