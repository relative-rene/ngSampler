import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewInit  } from '@angular/core';
import { GivingService } from '../../_services/giving.service';
import { SettingsService } from '../../_services/settings.service';
import { CommentsService } from '../../_services/comments.service';
import { UserService } from '../../_services/user.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { TransactionsService } from '../../_services/transactions.service';

declare let $: any;

@Component({
  selector: 'giving-fundraiser',
  templateUrl: './giving-fundraiser.component.html',
  styleUrls: ['./giving-fundraiser.component.css'],
  providers: [GivingService, CommentsService, SettingsService, UserService, TransactionsService]

})
export class GivingFundraiserComponent implements OnInit, AfterViewInit {
  @Input() opportunity: any = {
    donationMatchLimit: 0,
    comments: []
  };
  @Input() donations: any[] = [];
  @Input() fileList: any = {};
  @Input() userId: string = "";
  @Input() profile: any = {};
  @Input() points: any = {};
  acceptedTerms: boolean = false;
  @ViewChild("donationAmount") donationInput;
  @ViewChild('employerMatch') employerMatch;
  @ViewChild('postCommentTextArea') postCommentTextArea;
  @Output() reloadData: EventEmitter<any> = new EventEmitter();
  tran: any = {
    donationAmount: 0,
    fee: 0,
    match: 0,
    resultDonation: 0
  };
  startId: string = "";
  fetchCommentsPending = false;
  settings: any = {};
  hideEditButton = false;
  public user = sessionStorage.getItem('currentUser') || '';
  public session  = JSON.parse(this.user);


  constructor(private service: GivingService,
    private commentsService: CommentsService,
    private settingsService: SettingsService,
    private userService: UserService,
    private toast: ToastComponent,
    private tranService: TransactionsService) { }

  ngOnInit() { }
  ngAfterViewInit() { }
  loadComments() {
    if (this.fetchCommentsPending === true)
      return;
    if (this.opportunity._id !== undefined) {
      this.fetchCommentsPending = true;
      this.commentsService.listAll('givingevents', this.opportunity._id)
        .subscribe(res => {
          this.fetchCommentsPending = false;
          this.opportunity.comments = res;
          this.startId = this.opportunity._id;
        });
    }

    this.settingsService.list()
      .subscribe(res => {
        this.settings = {};
        var keys = Object.keys(res);
        for (var c = 0, l = keys.length; c < l; c++)
          this.settings[keys[c]] = res[keys[c]].settingsstring;
      });
  }

  postComment() {

    if (this.postCommentTextArea.nativeElement.value.trim() === '') {
      alert('Please enter text to comment');
      return;
    }
    var commentData = {
      comment: this.postCommentTextArea.nativeElement.value.trim(),
      parentCommentId: '',
      picture: false
    };
    this.postCommentTextArea.nativeElement.value = '';
    this.commentsService.create('givingevents', this.opportunity._id, commentData)
      .subscribe(res => {
        this.loadComments();
      });
  }

  donate() {
    var amt = this.donationInput.nativeElement.value;

    amt = Number(amt);

    if (isNaN(amt) || amt <= 0.0) {
      alert('Please enter a valid amount');
      return;
    }

    var donateData = {
      name: this.opportunity.name + ' donation',
      tranAmount: this.tran.donationAmount,
      tranMatch: this.tran.match,
      tranFee: this.tran.fee,
      tranTotal: this.tran.resultDonation,
      relatedEvent: this.opportunity._id,
      status: 'Pending',
      type: 'donation'
    };
    this.tranService.donate(donateData)
      .subscribe(res => {
        this.reloadData.emit('');
        $('#donationCompleteModal').modal('show');
        this.earnGivingPts();
      });
  }


  hasDonated() {
    if (this.donations === undefined)
      return false;
    if (this.donations.length > 0) {
      return true;
    }
    return false;
  }

  unDonate() {
    this.service.donate(this.opportunity._id, {}, true)
      .subscribe(res => {
        alert('undonated');
        this.reloadData.emit('');
      });
  }

  getBKGImage() {
    if (this.opportunity._id === undefined)
      return '';
    if (this.startId === "") {
      this.loadComments();
    }
    var r = "url(https://s3.amazonaws.com/imminent/oahu/" + this.opportunity._id + "/" + this.opportunity.backgroundImageUrl + ")";

    if (this.opportunity.dashboardImageUrl !== undefined)
      if (this.opportunity.dashboardImageUrl !== '')
        r = 'url(' + this.opportunity.dashboardImageUrl + ')';
    return r;
  }

  getDonationMatchLimit() {
    var limit = Number(this.settings.adminEmployeeMatchLimitPerDonation);
    if (isNaN(limit))
      limit = 0.0;
    return limit;
  }

  updateDonationTran() {
    var amt = this.donationInput.nativeElement.value;
    amt = Number(amt);
    if (isNaN(amt) || amt <= 0.0) {
      amt = 0.0;
    }
    var limit = Number(this.settings.adminEmployeeMatchLimitPerDonation);
    if (isNaN(limit))
      limit = 0.0;
    this.tran.donationAmount = amt;
    if (this.employerMatch.nativeElement.checked) {
      var match = Math.min(amt, limit);
      match = Math.min(match, this.remainingMatch());
      if (match < 0.0)
        match = 0.0;
      this.tran.match = match;
    }
    else
      this.tran.match = 0;

    this.tran.resultDonation = this.tran.match + this.tran.donationAmount;
    this.tran.fee = this.tran.resultDonation * 0.05;
  }

  getEditRoute() {
    if (this.opportunity._id === undefined)
      return '';
    return '/giving-opportunity/' + this.opportunity._id;
  }

  hideCommentsPostBox() {
    if (this.opportunity.commentsAllowedBy === 'commentCreator') {
      if (this.userId === this.opportunity.createUser)
        return false;

      return true;
    }
    if (this.opportunity.commentsAllowedBy === 'commentDonors') {
      if (this.userId === this.opportunity.createUser)
        return false;

      if (this.hasDonated())
        return false;

      return true;
    }

    // commentAnyone or undefined
    return false;
  }

  earnGivingPts() {
    const points = this.points;
    const profile = this.profile;
    console.log('points', points, 'profile', profile);
    points['donationPts'] = JSON.stringify(+points['donationPts'] + 50);
    points['totalPts'] = JSON.stringify(+points['totalPts'] + 50);
    let data = { 'points': points };
    this.userService.updateById(profile._id, data)
      .subscribe(res => {
        console.log('res', res);
        this.toast.setMessage('Well done, you have earned 50 Donating Points', 'success');
      });
  }

  totalUserDonated() {
    var total = 0.0;
    for (var c = 0, l = this.donations.length; c < l; c++)
      if (this.donations[c].status === 'Complete')
        return total += this.donations[c].tranAmount;

    return total;
  }
  pendingTransactions() {
    for (var c = 0, l = this.donations.length; c < l; c++)
      if (this.donations[c].status === 'Pending')
        return true;

    return false;
  }
  totalUserPending() {
    var total = 0.0;
    for (var c = 0, l = this.donations.length; c < l; c++)
      if (this.donations[c].status === 'Pending')
        return total += this.donations[c].tranAmount;

    return total;
  }
  totalUserMatched() {
    var total = 0.0;
    for (var c = 0, l = this.donations.length; c < l; c++)
      return total += this.donations[c].tranMatch;

    return total;
  }
  remainingMatch() {
    var result = this.getDonationMatchLimit() - this.totalUserMatched();
    if (result < 0.0)
      return 0.0;
    return result;
  }
}
