import { Component, AfterViewInit, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { GivingService } from '../_services/giving.service';

declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService, GivingService]
})
export class HomeComponent implements AfterViewInit, OnInit {
  session = {};
  trending: any[] = [];

  constructor(private User: UserService,
    private toast: ToastComponent,
    private givingService: GivingService ) { }


  ngOnInit() {
    this.session = JSON.parse(sessionStorage.getItem('currentUser'));

    this.givingService.getTrending()
      .subscribe(res => {
        console.log(res);
        this.trending = [];
        var count = Math.min(3, res.length);
        if (res.length < 3)
          count = res.length;

        for (var c = 0, l = count; c < l; c++)
          this.trending.push(res[c]);
      });
  }

  ngAfterViewInit() {
    $('.datepicker').datepicker().on('changeDate', function(e) {
      $('#modalCalender').modal('show');
    });

    // let session = JSON.parse(sessionStorage.getItem('currentUser'));
    //
    // this.User.getById(session.id).subscribe((res) => {
    //   console.log('USER PROFILE:', res);
    //   if(res){
    //     $('#onboarding-modal').modal('show');
    //   }
    // });
  }
}
