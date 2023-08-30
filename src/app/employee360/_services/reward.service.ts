import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';

@Injectable()
export class RewardService {

  constructor(private http: HttpClient) {
    // console.log('RewardService Initialized...');
  }

  getRewards() {
    return this.http.get(`/api/rewards/search`);
  }

  addReward(data) {
    return this.http.post(`/api/rewards/create`, JSON.stringify(data));
  }


  deleteReward(data) {
    return this.http.delete('/api/rewards/' + data);
  }

  editReward(id, data) {
    return this.http.put('/api/rewards/' + id, data);
  }

}
