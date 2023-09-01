import { Component, AfterViewInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
declare let $: any;

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements AfterViewInit {
  public userStorage = sessionStorage.getItem('currentUser') || ''; 
  private session = JSON.parse(this.userStorage);
  public user: any = {}; // view model variable

  constructor(private User: UserService) {
    this.User.getById(this.session.id).subscribe((res) => {
      this.user = res;
      // console.log('User: ', this.user);
    });
  }

  onSubmit(form: any) {
    let user = sessionStorage.getItem('currentUser') || '';
    let session = JSON.parse(user);
    // TODO: bind/subscribe ui to user service profile

    console.log('onSubmit', form);
    this.User.updateById(session.id, form).subscribe((res) => {
      // console.log('res', res);
    });
  }

  // temporary jquery
  ngAfterViewInit() {
    $(document).ready(function() {
      //Initialize tooltips
      $('.nav-tabs > li a[title]').tooltip();

      //Wizard
      $('a[data-toggle="tab"]').on('show.bs.tab', ((e:Event)=> {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
          return false;
        }
        return;
      }));

      $(".next-step").click((e)=> {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

      });
      $(".prev-step").click((e)=> {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

      });
    });

    function nextTab(elem) {
      $(elem).next().find('a[data-toggle="tab"]').click();
    }
    function prevTab(elem) {
      $(elem).prev().find('a[data-toggle="tab"]').click();
    }
  }

}
