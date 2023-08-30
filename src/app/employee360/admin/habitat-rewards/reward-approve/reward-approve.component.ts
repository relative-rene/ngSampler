import { Component } from '@angular/core';
import { ReceiptService } from '../../../_services/receipt.service';
import { PagerService } from '../../../_services/pager.service';
import { ToastComponent } from '../../../shared/toast/toast.component';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-reward-approve',
  templateUrl: './reward-approve.component.html',
  styleUrls: ['./reward-approve.component.css'],
  providers: [ReceiptService, PagerService]
})
export class RewardApproveComponent {
  private allItems: any[];
  public pagedItems: any[];
  public pager: any = {};



  constructor(
    private receiptService: ReceiptService,
    private toast: ToastComponent,
    private pagerService: PagerService) {
    this.receiptService.getRewardReceipts().subscribe(res => {
        this.allItems = res;
        this.setPage(1);
      });
    }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
