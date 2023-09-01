import { Component, OnInit, ViewChild } from '@angular/core';
import {
  SuggestionsService
} from '../../_services/suggestions.service';
declare let $: any;

@Component({
  selector: 'app-habitat-suggestion-box',
  templateUrl: './habitat-suggestion-box.component.html',
  styleUrls: ['./habitat-suggestion-box.component.css'],
  providers: [SuggestionsService]
})
export class HabitatSuggestionBoxComponent implements OnInit {
  @ViewChild('submitText') submitText;
  suggestions: any[] = [];
  userId: string;
  isAdmin: boolean = false;

  constructor(private service: SuggestionsService) {
    let user = sessionStorage.getItem('currentUser') || '';
    var currentUser = JSON.parse(user);
     if (currentUser.permissions.indexOf('admin') !== -1)
      this.isAdmin = true;

    this.userId = currentUser.id;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.list()
      .subscribe(res => {
        this.suggestions = res;
      });
  }
  submit() {
    if (this.submitText.nativeElement.value.trim() === '') {
      alert('please enter suggestion');
      return;
    }
    this.service.create({ text: this.submitText.nativeElement.value.trim() }).
      subscribe(res => {
        this.loadData();
      });
    $('#myhabitatsuggestModal').modal('hide');
  }
  delete(id) {
    if (!confirm('Are you sure?'))
      return;

    this.service.delete(id).
      subscribe(res => {
        this.loadData();
      });
  }
  noDelete(creatorId) {
    console.log(this.isAdmin, this.userId, creatorId);
    if (this.isAdmin)
      return false;
    if (this.userId === creatorId)
      return false;
    return true;
  }
}
