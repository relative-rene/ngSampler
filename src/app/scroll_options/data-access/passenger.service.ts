import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  #pageSize = 15;

  constructor(private http: HttpClient) { }

  getPassengerData(page: number): Observable<any> {
    return from(
      fetch(
        `https://www.reddit.com/r/gif/hot/.json?limit=${page * this.#pageSize}`, // the url you are trying to access
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
