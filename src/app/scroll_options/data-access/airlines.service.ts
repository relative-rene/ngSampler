import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {

  constructor(private httpClient: HttpClient) { }

  getAs(page: number): Observable<any>{
    return from(  
    fetch(
      'https://jsonplaceholder.typicode.com/albums/1/photos', // the url you are trying to access
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET', // GET, POST, PUT, DELETE
        mode: 'no-cors' // the most important option
      }
    ));
  }
}
