import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../_services/transactions.service';

@Component({
  selector: 'app-admin-transactions',
  templateUrl: './admin-transactions.component.html',
  styleUrls: ['./admin-transactions.component.css'],
  providers: [TransactionsService]
})
export class AdminTransactionsComponent implements OnInit {
  transactions: any[] = [];
  userId = '';

  constructor(private service: TransactionsService) {
    var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.userId = currentUser.id;
  }

  ngOnInit() {
    this.loadData();
  }
  delete(id) {
    this.service.delete(id)
      .subscribe(gRes => {
        this.loadData();
      });
  }
  loadData() {
    this.service.list('', '', '', '')
      .subscribe(gRes => {
        this.transactions = gRes;
      });
  }
  complete(transaction) {
    this.service.approve(transaction._id)
      .subscribe(gRes => {
        this.loadData();
      });
  }
}
