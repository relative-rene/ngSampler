import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../_services/login.service';
import { UserService } from '../../_services/user.service';
declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [LoginService, UserService]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  // @Input() active: string;
  public active: string = '';
  // isWellbeing:boolean;
  // isGiving:boolean;
  // isHabitat:boolean;
  // isSocial:boolean;
  public userId: string = '';
  public profile = {};
  public user =  sessionStorage.getItem('currentUser') || '';
  public session = JSON.parse(this.user);
  points = this.profile['points'];

  constructor(private auth: LoginService, private router: Router, private userService: UserService) {

  }

  // isActive(e) {
  //   console.log('isActive', e);
  //   switch(e){
  //
  //   }
  //
  // }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  // temporary jquery
  ngAfterViewInit() {
    (function($) {
      $(document).ready(function() {
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
          event.preventDefault();
          event.stopPropagation();
          $(event.currentTarget).parent().siblings().removeClass('open');
          $(event.currentTarget).parent().toggleClass('open');
        });
      });
    });

    $(function() {
      var isActive = 'nav';

      $(".chat-list a").click(function() {
        $('#qnimate').addClass('popup-box-on');
      });

      $("#removeClass").click(function() {
        $('#qnimate').removeClass('popup-box-on');
      });

      $('#company-logo').click(function() {
        isActive = 'nav';
        $('#circle-nav').css('background-image', 'url(assets/img/circle-nav.png)');
      });

      $('#circle-wellbeing').hover(function() {
        $('#circle-nav').css('background-image', 'url(assets/img/circle-wellbeing.png)');
      }, function() {
        // on mouseout, reset the background image
        $('#circle-nav').css('background-image', 'url(assets/img/circle-' + isActive + '.png)');
      }).click(function() {
        isActive = 'wellbeing';
      });

      $('#circle-giving').hover(function() {
        $('#circle-nav').css('background-image', 'url(assets/img/circle-giving.png)');
      }, function() {
        $('#circle-nav').css('background-image', 'url(assets/img/circle-' + isActive + '.png)');
      }).click(function() {
        isActive = 'giving';
      });

      $('#circle-habitat').hover(function() {
        $('#circle-nav').css('background-image', 'url(assets/img/circle-habitat.png)');
      }, function() {
        $('#circle-nav').css('background-image', 'url(assets/img/circle-' + isActive + '.png)');
      }).click(function() {
        isActive = 'habitat';
      });

      $('#circle-social').hover(function() {
        $('#circle-nav').css('background-image', 'url(assets/img/circle-social.png)');
      }, function() {
        $('#circle-nav').css('background-image', 'url(assets/img/circle-' + isActive + '.png)');
      }).click(function() {
        isActive = 'social';
      });
    });

    function nextTab(elem) {
      $(elem).next().find('a[data-toggle="tab"]').click();
    }
    function prevTab(elem) {
      $(elem).prev().find('a[data-toggle="tab"]').click();
    }
  }

  // move() {
  //   var elem = document.getElementById("progress-bar");
  //   var width = 1;
  //   var id = setInterval(frame, 50);
  //   function frame() {
  //     if (width >= 50) {
  //       clearInterval(id);
  //     } else {
  //       width++;
  //       elem.style.width = width + '%';
  //     }
  //   }
  // }

  refreshChildView() {
    //alert('refresh');
  }

  ngOnInit() {
    // this.move();
    // console.log('active',this.active);
    let user = sessionStorage.getItem('currentUser') || '';
    var currentUser = JSON.parse(user);
    this.userId = currentUser.id;
    this.setProfile();
  }


  setProfile() {
    let userId = this.session.id;
    this.userService.getById(userId)
      .subscribe(res => { this.profile = res });
  }

}
