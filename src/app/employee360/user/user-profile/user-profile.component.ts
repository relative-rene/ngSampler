import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ReceiptService } from '../../_services/receipt.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [ReceiptService, UserService]
})
export class UserProfileComponent implements AfterViewInit, OnInit {
  public allItems: any = [];
  public session = JSON.parse(sessionStorage.getItem('currentUser'));
  public profile = {};
  public points = {};
  public pageVisits = 0;
  public hasReceipts = false;

  constructor(
    private receiptService: ReceiptService,
    private userService: UserService) {
    this.userService.getById(this.session.id)
      .subscribe(res => {
        this.profile = res;
        this.points = res.points;
      });
  }

  ngOnInit() {
    let total;
    for (let key in this.points) {
      console.log(this.points[key]);
      total = +total + +this.points[key];
    }
    console.log('total', total);
  }

  ngAfterViewInit() {
    this.receiptService.getByUserId(this.session.id).subscribe(res => {
      res.forEach(function(receipt) {
        if (receipt.userId === this.session.id) {
          this.allItems.push(receipt);
          this.hasReceipts = true;
        }
      }, this);
    });
  }

}
