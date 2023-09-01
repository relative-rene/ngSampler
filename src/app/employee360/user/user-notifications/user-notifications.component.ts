import {  Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../_services/notifications.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.css'],
  providers: [ NotificationsService ]
})
export class UserNotificationsComponent implements OnInit {
  public notifications: any[] = [];
  public userId: string = '';

  constructor(private service: NotificationsService) { }

  ngOnInit() {
    this.reloadData();
    let user = sessionStorage.getItem('currentUser') || '';
    var currentUser = JSON.parse(currentUser);
    this.userId = currentUser.id;

    // 3 sec delay to start, tick every second
    var me = this;
    let timerSub = timer(3000, 1000);
    timerSub.subscribe(function(t) {
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
      .subscribe((res:any) => {
        this.notifications = res;
        var display = this.notifications.length.toString();
        if (this.notifications.length >= 6)
          display = '5+';
      });
  }
}
