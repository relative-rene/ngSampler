import { EventEmitter, ViewChild, Input, Output, Component, OnInit } from '@angular/core';
import { CommentsService } from '../../_services/comments.service';
import { CommentDisplayComponent } from '../comment-display/comment-display.component';

declare let $: any;

@Component({
  selector: 'comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css'],
  providers: [CommentsService]
})
export class CommentAddComponent implements OnInit {
  @Input() id: string;
  @Input() collname: string;
  @Input() cParentId: string;
  @Output() comments : EventEmitter<any> = new EventEmitter();
  userId: string;

  @ViewChild('commenttext') comment;
  @ViewChild('commentfile') file;

  constructor(private service: CommentsService) { }

  ngOnInit() {
    var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.userId = currentUser.id;
  }


  feedPostComment() {
    var commentData = {
      comment: this.comment.nativeElement.value,
      parentCommentId: this.cParentId,
      picture: false
    };
    if (this.file.nativeElement.files[0])
      commentData.picture = true;
    this.service.create(this.collname, this.id, commentData)
      .subscribe(res => {
        this.comment.nativeElement.value = '';
        if (commentData.picture === true) {
          this.uploadFile(this.id, res.comment.id, this.file.nativeElement);
        }
        else
          this.dismissAndReload();
      });
  }

  uploadComplete(result) {
    this.dismissAndReload();
  }

  uploadFile(id, commentid, fileSelect) {
    var me = this;
    var formData = new FormData();
    formData.append('uploadfile', fileSelect.files[0]);
    var url = 'http://localhost' + this.service.getApiPrefix(this.collname) + '/' + id + '/files/comment' + commentid.toString() + '.png';
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
    this.comments.emit(null);
  }

}
