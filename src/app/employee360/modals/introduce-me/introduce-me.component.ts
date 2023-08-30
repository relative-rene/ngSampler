import { Component, EventEmitter, ViewChild, Input, Output } from '@angular/core';
import { CommentsService } from '../../_services/comments.service';
import { HabitatMentorshipComponent } from '../../habitat/habitat-mentorship/habitat-mentorship.component';
import { NotificationsService } from '../../_services/notifications.service';
declare let $: any;

@Component({
  selector: 'app-introduce-me',
  templateUrl: './introduce-me.component.html',
  styleUrls: ['./introduce-me.component.css'],
  providers: [CommentsService, HabitatMentorshipComponent, NotificationsService]
})


export class IntroduceMeComponent {
  @Input() pager: any;
  @Input() id: string;
  @Input() cParentId: string;
  @Output() comments: EventEmitter<any> = new EventEmitter();
  @ViewChild('commenttext') comment;
  private currentUser;

  constructor(private notiService: NotificationsService, private commentService: CommentsService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

  }

  introduceComment() {
    console.log(this);
    const commentData = {
      comment: this.comment.nativeElement.value,
      parentCommentId: this.cParentId,
      commentMakerName: this.pager.lastName
    };
    const commentReceiver = this.pager;
    this.commentService.create('users', commentReceiver._id, commentData)
      .subscribe(res => {
        this.comment.nativeElement.value = '';
        if (res) {
          $('#myModalintro').modal('hide');
          console.log('commentService res', res);
          let data = this.pager;
          data.commentId = res.comment.id;
          this.notiService.introduceMeNotification(data)
            .subscribe(res => console.log('success'));
        }
      });
  }
}
