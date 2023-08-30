import { EventEmitter, ViewChild, Input, Output, Component, OnInit } from '@angular/core';
import { CommentsService } from '../../_services/comments.service';
import { CommentAddComponent } from '../comment-add/comment-add.component';

@Component({
  selector: 'comment-display',
  templateUrl: './comment-display.component.html',
  styleUrls: ['./comment-display.component.css'],
  providers: [CommentsService]
})
export class CommentDisplayComponent implements OnInit {
  @Input() id: string;
  @Input() collname: string;
  @Input() childComments: Object[] = null;
  @Input() rootCommentId: String = "";
  @Input() rootComment : any = this;
  @Output() commentsChange: EventEmitter<any> = new EventEmitter();

  comments: Object[];
  replyShown: Object = {};
  userId: string;

  constructor(private service: CommentsService) { }
  ngOnInit() {
    this.reloadData();
    var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.userId = currentUser.id;
  }
  isRoot() {
    if (this.rootComment === this)
      return true;
  }
  buttonId() {
    if (this.isRoot())
      return "CommentsRefreshButton";

    return 'commentchild' + this.id + 'button';
  }
  isCurrentUser(userId) {
    return (this.userId === userId);
  }
  makeCommentHierarchy(rawComments) {
    var treeComments = [];
    for (var c = 0, l = rawComments.length; c < l; c++) {
      var parentIndex = this.commentParentIndex(rawComments, rawComments[c].parentCommentId);
      if (rawComments[c].children === undefined)
        rawComments[c].children = [];
      if (parentIndex !== -1) {
        if (rawComments[parentIndex].children === undefined)
          rawComments[parentIndex].children = [rawComments[c]];
        else
          rawComments[parentIndex].children.push(rawComments[c]);
      }
      else
        treeComments.push(rawComments[c]);
    }

    return treeComments;
  }
  getAllChildCount(cArray) {
    var totalCount = cArray.length;
    for (var c = 0, l = cArray.length; c < l; c++)
      totalCount += this.getAllChildCount(cArray[c].children);
    return totalCount;
  }
  commentParentIndex(rawComments, parentId) {
    for (var c = 0, l = rawComments.length; c < l; c++)
      if (parentId === rawComments[c].id)
        return c;
    return -1;
  }
  reloadData() {
    if (Array.isArray(this.childComments)) {
      this.comments = this.childComments;
      return;
    }
    if (this.id === undefined)
      return;
    if (this.id === '')
      return;
    this.service.listAll(this.collname, this.id)
      .subscribe(res => {
        this.comments = this.makeCommentHierarchy(res);
        this.commentsChange.emit(res);
      });
  }
  deleteComment(comment) {
    this.service.delete(this.collname, this.id, comment.id)
      .subscribe(res => {
        this.rootComment.reloadData();
      });
  }
  getCommentImage(comment) {
    if (comment.picture) {
      return '<img alt="" class="img-responsive" style="display: block;z-index: 10; position: relative;" ' +
        ' src="https://s3.amazonaws.com/imminent/oahu/' + this.id + '/comment' + comment.id + '.png">';

    }

    return "";
  }
}
