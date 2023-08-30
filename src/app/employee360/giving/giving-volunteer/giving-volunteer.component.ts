import { Component, OnInit, Input, Output, EventEmitter,
  ViewChild, AfterViewInit } from '@angular/core';
import { GivingService } from '../../_services/giving.service';
import { CommentsService } from '../../_services/comments.service';
import { UserService } from '../../_services/user.service';
import { ToastComponent } from '../../shared/toast/toast.component';
declare let $: any;

@Component({
  selector: 'giving-volunteer',
  templateUrl: './giving-volunteer.component.html',
  styleUrls: ['./giving-volunteer.component.css'],
  providers: [GivingService, CommentsService]
})
export class GivingVolunteerComponent {
  @Input() opportunity: any = {};
  @Input() fileList: any = {};
  @Input() userId: string = "";
  @Input() points: any = {};
  @Input() profile: any = {};
  @ViewChild('postCommentTextArea') postCommentTextArea;

  @Output() reloadData: EventEmitter<any> = new EventEmitter();
  startId: string = "";
  fetchCommentsPending: boolean = false;
  scrollData = {
    scrollNeeded: false,
    fragment: ''
  };
  viewInited = false;
  dataLoaded = false;
  hideEditButton = false;
  shiftsPending = {};

  constructor(private service: GivingService,
    private commentsService: CommentsService,
    private userService: UserService,
    private toast: ToastComponent) {
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
  getSkillPoints() {
    if (this.opportunity.rewardPoints)
      return this.opportunity.rewardPoints;

    return "NA";
  }
  participate(shiftIndex) {
    this.service.participate(this.opportunity._id, shiftIndex, false)
      .subscribe(res => {
        this.reloadData.emit('');
        this.earnGivingPts();
      });
  }

  unParticipate(shiftIndex) {
    this.service.participate(this.opportunity._id, shiftIndex, true)
      .subscribe(res => {
        this.reloadData.emit('');
      });
  }
  getEventDate() {
    return new Date(this.opportunity.startDate).toLocaleDateString();
  }
  isParticipant(shift, index) {
    var result = true;
    if (shift.participants === undefined)
      result = false;

    if (shift.participants[this.userId] === undefined)
      result = false;

    if (this.shiftsPending[index])
      result = !result;

    return result;
  }
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
  getProgressStyleWidth() {
    var percentage = this.getSpotsFilled() / this.getTotalSpots() * 100.0;
    return percentage.toFixed(2) + "%";
  }
  daysLeft() {
    var startDate = new Date(this.opportunity.startDate);
    var now = new Date();
    var diff = Number(startDate) - Number(now);

    var result = (diff / (1000 * 60 * 60 * 20));

    if (isNaN(result))
      result = 0.0;
    return result.toFixed(0);
  }
  getTotalSpots() {
    var totalSpots = 0;
    for (var c = 0, l = this.opportunity.availableShifts.length; c < l; c++) {
      totalSpots += Number(this.opportunity.availableShifts[c].spots);
    }
    return totalSpots;
  }
  getSpotsFilled() {
    var filledSpots = 0;
    for (var c = 0, l = this.opportunity.availableShifts.length; c < l; c++) {
      var keys = Object.keys(this.opportunity.availableShifts[c].participants);
      filledSpots += keys.length;
    }
    return filledSpots;
  }
  getUniqueParticipants() {
    var users = {};
    for (var c = 0, l = this.opportunity.availableShifts.length; c < l; c++) {
      var keys = Object.keys(this.opportunity.availableShifts[c].participants);
      for (var d = 0, dl = keys.length; d < dl; d++)
        users[keys[d]] = true;
    }

    return Object.keys(users).length;
  }
  shiftSpotsAvailable(shift) {
    var keys = Object.keys(shift.participants);
    return Number(shift.spots) - keys.length;
  }
  shiftsAvailable() {
    var shiftsOpen = 0;
    for (var c = 0, l = this.opportunity.availableShifts.length; c < l; c++)
      if (this.shiftSpotsAvailable(this.opportunity.availableShifts[c]) !== 0)
        shiftsOpen++;
    return shiftsOpen;
  }
  formatTime(timeStr) {
    var startHour = Number(timeStr.substr(0, 2));
    var startMinutes = Number(timeStr.substr(3, 2));

    var result = '';
    var minutes = '';
    if (startMinutes < 10)
      minutes = '0' + startMinutes.toString();
    else
      minutes = startMinutes.toString();

    if (startHour < 12)
      result += startHour.toString() + ':' + minutes + ' AM';
    else {
      if (startHour == 12)
        result += (startHour).toString() + ':' + minutes + ' PM';
      else
        result += (startHour - 12).toString() + ':' + minutes + ' PM';
    }
    return result;
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

      var vol = false;
      for (var c = 0, l = this.opportunity.availableShifts.length; c < l; c++) {
        var shift = this.opportunity.availableShifts[c];
        if (shift.participants[this.userId]) {
          vol = true;
          break;
        }
      }

      if (vol)
        return false;
      return true;
    }

    //commentAnyone or undefined
    return false;
  }
  isVolunteerSelectionNotPendingDisplay() {
    if (Object.keys(this.shiftsPending).length > 0)
      return 'inline-block';
    return 'none';
  }
  toggleShiftPending(index, shift) {
    if (this.shiftsPending[index])
      delete this.shiftsPending[index];
    else {
      if (this.isFull(shift)) {
        window.alert('Shift is already full.');
        return;
      }
      this.shiftsPending[index] = true;
    }
  }
  commitPendingShifts() {
    var shiftChanges = Object.keys(this.shiftsPending);

    for (var c = 0, l = shiftChanges.length; c < l; c++) {
      var shift = this.opportunity.availableShifts[shiftChanges[c]];
      if (shift.participants[this.userId])
        this.unParticipate(shiftChanges[c]);
      else
        this.participate(shiftChanges[c]);
    }

    this.shiftsPending = {};
  }
  isFull(shift) {
    if (this.shiftSpotsAvailable(shift) <= 0)
      return true;
    return false;
  }

  earnGivingPts() {
    const points = this.points;
    const profile = this.profile;
    points['volunteerPts'] = JSON.stringify(+points['volunteerPts'] + 50);
    points['totalPts'] = JSON.stringify(+points['totalPts'] + 50);
    let data = { 'points': points };
    this.userService.updateById(profile._id, data)
      .subscribe(res => {
        this.toast.setMessage('Well done, you have earned 50 Volunteer Points', 'success');
      });
  }
}
