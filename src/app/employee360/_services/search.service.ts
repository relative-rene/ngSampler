import { Injectable }     from '@angular/core';
import { HttpClient } from './http-client.service';
import { Observable } from 'rxjs';
import { Imentor } from '../_interfaces/mentor.interface';
import { Ireward } from '../_interfaces/reward.interface';


@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  searchProfiles(term: string): Observable<Imentor[]> {
    return this.http
      .get(`/api/users/search?username=${term}`);
  }

  searchRewards(term: string): Observable<Ireward[]> {
    return this.http
      .get(`/api/rewards/search?name=${term}`);
  }

  sortSearchStatus(status: string, sortBy, upDown = 'Ascend'): Observable<Imentor[]> {
    return this.http
      .get(`/api/users/search?status=${status};&sortBy=${sortBy};&upDown=${upDown}`);
  }

}
