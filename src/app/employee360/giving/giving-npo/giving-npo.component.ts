import { Component, OnInit, AfterViewInit } from '@angular/core';
// We import the Router, ActivatedRoute, and Params tokens from the router package.
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CharityNavigatorService } from '../../_services/charity-navigator.service';
// process the Observable route parameters
import 'rxjs/add/operator/switchMap';
declare let $: any;

@Component({
  selector: 'app-giving-npo',
  templateUrl: './giving-npo.component.html',
  styleUrls: ['./giving-npo.component.css'],
  providers: [CharityNavigatorService]
})
export class GivingNpoComponent implements OnInit, AfterViewInit {

  private charity;
  private amount;

  // we write a constructor that asks Angular to inject services that the component requires and reference them as private variables.
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CharityNavigatorService
  ) { }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getCharityDetail(+params['id']))
      .subscribe(res => {
        this.charity = res.objects[0];
        console.log('this.charity', this.charity);
      });
  }

  ngAfterViewInit() {
    $(function() {
      $('.toggle').bootstrapToggle();
    })
  }

}
