import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';

@Injectable()
export class ReceiptService {

  constructor(private http: HttpClient) { }

  getRewardReceipts() {
    return this.http.get(`api/receipts/rewards/`);
  }

  getByUserId(id) {
    return this.http.get(`api/receipts/rewards?&ampuserId=${id}`);
  }

  createReceipt(data) {
    console.log('createReceipt receiptservices', data);
    return this.http.post(`api/receipts/create`, JSON.stringify(data));
  }

  adjustReceipt(data, id) {
    return this.http.put(`api/receipts/${id}`, JSON.stringify(data));
  }

  destroyReceipt(data) {
    return this.http.delete(`api/receipts/` + data);
  }

}
