import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../_services/feed.service';
import { NotificationsService } from '../../_services/notifications.service';
import { CommentAddComponent } from '../../shared/comment-add/comment-add.component';
import { CommentDisplayComponent } from '../../shared/comment-display/comment-display.component'

@Component({
  selector: 'app-feed-display',
  templateUrl: './feed-display.html',
  styleUrls: ['./feed-display.css'],
  providers: [FeedService, NotificationsService]
})
export class FeedDisplayComponent implements OnInit {
  posts: Object[];
  commentsShown: Object = {};
  userId: string;

  constructor(private service: FeedService, private notificationsService: NotificationsService) {
  }
  ngOnInit() {
    let user = sessionStorage.getItem('currentUser') || '';
    var currentUser = JSON.parse(user);
    this.userId = currentUser.id;

    this.reloadData();
  }
  commentsChange(post, value) {
    post.comments = value;
  //  console.log(post.comments, value);
  }
  reloadData() {
    this.service.listAll()
      .subscribe(res => {
        this.posts = res;
      });
  }
  postUIType(post) {
    if (post.type) {
      var parts = post.type.split("-");
      return parts[0].toUpperCase();
    }

    return "USER";
  }

  postSocialBackgroundImage(post) {
    if (this.postSocialType(post) === 'socialgiving')
      return post.metaData.backgroundImage;
    return '';
  }

  postSocialHTML(post) {
    if (this.postSocialType(post) === 'youtube')
      return '<iframe width="560" height="315" src="' + post.metaData.youtubeurl + '" frameborder="0" allowfullscreen></iframe>';
    if (this.postSocialType(post) === 'socialgiving')
      return post.metaData.displayHTML;
    return '';
  }

  postSocialType(post) {
    if (post.metaData !== undefined) {
      if (post.metaData.socialtype !== undefined)
        return post.metaData.socialtype;
      if (post.metaData.userposttype !== undefined)
        return post.metaData.userposttype;
    }

    return '';
  }

  postImg(post) {
    if (!this.postUIHide(post, 'UserPostImageUI'))
      return '<img alt="" class="img-responsive" style="display: block;z-index: 10; position: relative;" ' +
        ' src="https://s3.amazonaws.com/imminent/oahu/' + post._id + '/picture.png">';

    return "";
  }

  postUIHide(post, uiBlock) {
    var type = this.postUIType(post);
    if (uiBlock === 'basicUI') {
      if (type === 'WELLBEING')
        return false;
      if (type === 'GIVING')
        return false;
    }
    if (uiBlock === 'shareVideoUI') {
      if (type === "SOCIAL")
        if (this.postSocialType(post) === 'youtube')
          return false;
    }
    if (uiBlock === 'socialGivingShareUI') {
      if (type === "SOCIAL")
        if (this.postSocialType(post) === 'socialgiving')
          return false;
    }
    if (uiBlock === 'sharedPollUI') {
      if (type === "HABITAT")
        return false;
    }
    if (uiBlock === 'UserPostUI') {
      if (type === 'USER')
        return false;
    }
    if (uiBlock === 'UserPostImageUI') {
      if (this.postSocialType(post) === 'image')
        return false;
    }
    return true;
  }

  postUITypeColor(post) {
    var type = this.postUIType(post);
    if (type === "GIVING")
      return "#00c6e9";
    if (type === "SOCIAL")
      return "#b76a98";
    if (type === "WELLBEING")
      return "#89badb";
    if (type === "HABITAT")
      return "#c1b503";

    //USER
    return "#33ee33";
  }
  enableNotification(post, e) {
    this.notificationsService.suppressNotifications('posts comments', post._id, true)
      .subscribe(res => {
        this.reloadData();
      });
    e.stopPropagation();
  }
  deletePost(post, e) {
    this.service.delete(post._id)
      .subscribe(res => {
        this.reloadData();
      });
    e.stopPropagation();
  }
  postShowNotifyEnable(post) {
    if (post.donotnotify) {
      for (let c = 0, l = post.donotnotify.length; c < l; c++)
        if (post.donotnotify[c].userId === this.userId)
          return true;
    }

    return false;
  }
}
