import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../_services/feed.service';
import { UserService } from '../../_services/user.service';
import { ToastComponent } from '../../shared/toast/toast.component';
declare let $: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [FeedService, UserService]
})
export class PostComponent implements OnInit {
  profile = {};
  userPoints = {};
  session = JSON.parse(sessionStorage.getItem('currentUser'));

  constructor(private feedService: FeedService,
    private userService: UserService,
    private toast: ToastComponent) { }

  ngOnInit() {
    this.setProfile();
  }


  getPostType() {
    if ((<HTMLInputElement>document.getElementById('userposttypetext')).checked)
      return 'usertext';
    if ((<HTMLInputElement>document.getElementById('userposttypelink')).checked)
      return 'userlink';
    if ((<HTMLInputElement>document.getElementById('userposttypefile')).checked)
      return 'userfile';
    if ((<HTMLInputElement>document.getElementById('userposttypeyoutube')).checked)
      return 'useryoutube';
  }

  postSocialPost(modal) {
    var me = this;
    var summaryCtl = <HTMLInputElement>document.getElementById('postComponentTextArea');
    var summary = summaryCtl.value;
    var type = "User";
    var link = "";
    var metaData = {
      "userposttype": "message",
      socialtype: "",
      youtubeurl: "",
      fileurl: ""
    };
    var postType = this.getPostType();

    if (postType === 'useryoutube') {
      type = 'Social-Video';
      var uturl = (<HTMLInputElement>document.getElementById('userpostyoutube')).value;
      metaData.socialtype = "youtube",
        metaData.youtubeurl = uturl;
    }

    if (postType === 'userfile') {
      type = 'User-Image';
      //var uturl = (<HTMLInputElement>document.getElementById('userpostyoutube')).value;
      metaData.socialtype = "image";
      //  metaData.fileurl =  uturl;
    }
    this.feedService.create(summary, type, link, metaData)
      .subscribe(res => {
        summaryCtl.value = '';
        this.earnSocialPts();
        if (postType === 'userfile') {
          console.log('res', res);
          var post_id = res._id;
          var file = (<HTMLInputElement>document.getElementById('postuploadfile'));
          //    console.log('f90', file);
          me.uploadFile(post_id, file);
          //.then(res => {
          //    me.dismissAndReload();
          //  });
        }
        else
          me.dismissAndReload();
      });
  }

  uploadComplete(result) {
    this.dismissAndReload();
  }

  uploadFile(id, fileSelect) {
    var me = this;
    var formData = new FormData();
    formData.append('uploadfile', fileSelect.files[0]);
    var url = 'http://localhost/api/posting/posts/' + id + '/files/picture.png';
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    $.ajax({
      url: url,
      type: 'post',
      data: formData,
      headers: {
        'Accept': 'application/json',
        'Authorization': currentUser.token
      },
      xhr: function() {
        var xhr = $.ajaxSettings.xhr();
        if (xhr.upload) { }
        return xhr;
      },
      async: true,
      dataType: 'json',
      success: function(data) {
        return me.uploadComplete(data);
      },
      error: function(xhr, ajaxoptions, msg) {
        alert(xhr.status + ' ' + msg);
      },
      cache: false,
      contentType: false,
      processData: false
    }, 'json');
  }


  dismissAndReload() {
    document.getElementById('addPostModalDismissButton').click();
    document.getElementById('feedDisplayreloadDataButton').click();
  }

  earnSocialPts() {
    let points = this.points;
    console.log(points);
    const userId = this.session.id;
    console.log('points', points, 'profile', userId);
    points['socialPts'] = JSON.stringify((+points['socialPts']) + 5);
    points['totalPts'] = JSON.stringify((+points['totalPts']) + 5);
    let data = { 'points': points };
    this.userService.updateById(userId, data)
      .subscribe(res => {
        this.toast.setMessage('Well done, you have earned 5 Social Points', 'success');
      });
  }

  setProfile() {
    this.userService.getById(this.session.id)
      .subscribe(res => {
        this.profile = res;
        console.log('res.points', res.points);
        if (res.points['totalPts'] !== null) {
          this.userPoints = res.points;
        } else {
          let points = {};
          points['totalPts'] = '0';
          points['volunteerPts'] = '0';
          points['surveyPts'] = '0';
          points['wellbeingPts'] = '0';
          points['donationPts'] = '0';
          this.userPoints = points;
        }
      });
  }
}
