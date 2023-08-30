import { EventEmitter, ViewChild, Input, Output, Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../_services/notifications.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.css'],
  providers: [ NotificationsService ]
})
export class UserNotificationsComponent implements OnInit {
  notifications: Object[];
  userId: string;

  constructor(private service: NotificationsService) { }

  ngOnInit() {
    this.reloadData();
    var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.userId = currentUser.id;

    // 3 sec delay to start, tick every second
    var me = this;
    let timer = Observable.timer(3000, 1000);
    timer.subscribe(function(t) {
      me.reloadData()
    });
  }

  navigate(notification) {
    alert('click');
  }
  isCurrentUser(userId) {
    return (this.userId === userId);
  }
  markAll() {
    this.service.seenAll()
      .subscribe(res => {
        this.reloadData();
      });
  }
  deleteNotification(notification, e) {
    this.service.delete(notification._id)
      .subscribe(res => {
        this.reloadData();
      });
    e.stopPropagation();
  }
  markNotificationAsRead(notification, e) {
    this.service.markAsSeen(notification._id)
      .subscribe(res => {
        this.reloadData();
      });
    e.stopPropagation();
  }
  disableNotification(notification, e) {
    this.service.suppressNotifications(notification.type, notification.recordId, false)
      .subscribe(res => {
        this.reloadData();
      });
    e.stopPropagation();
  }
  getCommentIcon(notification) {
    return notification.userSeenDate !== null ? "" : "-o";
  }
  reloadData() {
    this.service.listAll()
      .subscribe(res => {
        this.notifications = res;
        var display = this.notifications.length.toString();
        if (this.notifications.length >= 6)
          display = '5+';
      });
  }
}
