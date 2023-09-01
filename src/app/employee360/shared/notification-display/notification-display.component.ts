import { EventEmitter, ViewChild, Output, Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../_services/notifications.service';
import { CommentsService } from '../../_services/comments.service';
import { UtilityService } from '../../_services/util.service';
import { UserService } from '../../_services/user.service';
import {  timer } from 'rxjs';
declare let $: any;

@Component({
  selector: 'notification-display',
  templateUrl: './notification-display.component.html',
  styleUrls: ['./notification-display.component.css'],
  providers: [NotificationsService, CommentsService, UserService, UtilityService]
})
export class NotificationDisplayComponent implements OnInit {
  @Output() loaded: EventEmitter<any> = new EventEmitter();
  @Output() refreshFeed: EventEmitter<any> = new EventEmitter();
  @ViewChild('notificationCount') notificationCount;
  public notifications: any[] = [];
  public userId: string = '';
  public commentMessage: string = '';
  public notification = {};
  public acceptableMentee = '';
  constructor(
    private service: NotificationsService,
    private commentService: CommentsService,
    private userService: UserService,
    private serviceUtil: UtilityService) { }

  ngOnInit() {
    this.reloadData();
    let user = sessionStorage.getItem('currentUser') || '';
    var currentUser = JSON.parse(user);
    this.userId = currentUser.id;

    // 3 sec delay to start, tick every second
    var me = this;
    let timerSub = timer(3000, 1000);
    timerSub.subscribe(function(t) {
      // me.reloadData()
    });
  }

  navigate(notification) {
    let commentId;
    if (notification.type === 'IntroduceMe') {
      commentId = notification.url;
      this.notification = notification;
      // TODO: GRAB THE RIGHT COMMENT
      this.commentService.listAll('users', notification.user)
        .subscribe((res:any) => {
          // set COMMENT MESSAGE
          res.forEach((item)=> {
            let count;
            if (item.id === commentId) {
              count = + 1;
              this.commentMessage = item.commentText;
              this.acceptableMentee = item.createUser;
            }
          }, this);
          // show modal
          $('#requestMP').modal('show');
        });
    }
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
        this.refreshFeed.emit();
        this.reloadData();
      });
    e.stopPropagation();
  }
  getCommentIcon(notification) {
    return notification.userSeenDate !== null ? "" : "-o";
  }

  reloadData() {
    this.service.listDisplay()
      .subscribe((res:any) => {
        this.notifications = res.notifications;
        this.loaded.emit(this.notifications);
        var display = res.unseenCount.toString();
        this.notificationCount.nativeElement.innerHTML = display;
      });
  }

}
