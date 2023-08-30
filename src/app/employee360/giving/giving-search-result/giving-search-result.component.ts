import {  Input, Component, OnInit, EventEmitter, Output } from '@angular/core';
declare let $: any;

@Component({
  selector: 'giving-search-result',
  templateUrl: './giving-search-result.component.html',
  styleUrls: ['./giving-search-result.component.css']
})
export class GivingSearchResultComponent implements OnInit {
  @Input() event: any;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
    constructor() { }
    ngOnInit() {

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
    	        html : true,trigger: "focus",
    });
});
}

    delete(event) {
      this.deleteEvent.emit(event);
    }
}
