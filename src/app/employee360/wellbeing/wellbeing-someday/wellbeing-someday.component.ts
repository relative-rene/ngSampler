import { Component, AfterViewInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-wellbeing-someday',
  templateUrl: './wellbeing-someday.component.html',
  styleUrls: ['./wellbeing-someday.component.css']
})
export class WellbeingSomedayComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $('.datepicker').datepicker();
    $('[data-toggle="toggle"]').bootstrapToggle();
  }

}
