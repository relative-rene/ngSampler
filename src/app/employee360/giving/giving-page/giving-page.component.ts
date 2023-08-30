import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, NavigationEnd, Router } from '@angular/router';
import { GivingService } from '../../_services/giving.service';
import { UserService } from '../../_services/user.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { TransactionsService } from '../../_services/transactions.service';
declare let $: any;


import { CommentDisplayComponent } from '../../shared/comment-display/comment-display.component';
import { GivingVolunteerComponent } from '../giving-volunteer/giving-volunteer.component';
import { GivingFundraiserComponent } from '../giving-fundraiser/giving-fundraiser.component';



@Component({
  selector: 'app-giving-page',
  templateUrl: './giving-page.component.html',
  styleUrls: ['./giving-page.component.css'],
  providers: [GivingService, UserService, TransactionsService]
})
export class GivingPageComponent implements OnInit, AfterViewInit {
  opportunity: any = {
    name: '',
    description: '',
    summary: '',
    availableShifts: [],
    comments: []
  };
  parameterSubscription: any;
  id: string;
  loading: true;
  userId: string;
  fileList: any[] = [];
  points: any = {};
  profile: any = {};
  donations: any[] = [];

  constructor(
    private toast: ToastComponent,
    private userService: UserService,
    private service: GivingService,
    private route: ActivatedRoute,
    private router: Router,
    private tranService: TransactionsService) { }
  ngOnInit() {
    this.parameterSubscription = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.id = params['id'];
        this.reloadData();
      }
    });

    var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.userId = currentUser.id;
    this.setProfile(currentUser.id);
  }

  ngAfterViewInit() { }

  reloadData() {
    this.service.get(this.id)
      .subscribe(gRes => {
        this.setData(gRes);
        this.service.fileList(this.id)
          .subscribe(fRes => {
            this.setFileList(fRes);
            this.tranService.eventTransactions(this.id)
              .subscribe(dRes => {
                this.donations = dRes;
              });
          });
      });
  }

  setData(data?) {
    if (data)
      this.opportunity = data;
    this.id = this.opportunity._id;
    // this.loading = false;
  }

  setFileList(data) {
    this.fileList = data;
  }
  keys(obj) {
    return Object.keys(obj);
  }

  setProfile(id) {
    this.userService.getById(id)
      .subscribe(res => {
        this.profile = res;
        this.points = res.points;
      });
  }


}
