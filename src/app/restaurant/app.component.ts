import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'restaurant',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  constructor(
    public navIsFixed: boolean = false,
    public googleLinkPath: string,
    public temp:any,
    private router: Router, private route: ActivatedRoute) { }

  /**
   * Lifecycle hook sets component public properties
   */
  ngOnInit() {
    this.googleLinkPath = "https://www.google.com/maps/dir//Neptune's,+630+Central+Ave,+Alameda,+CA+94501/@37.7713103,-122.2803176,17z/data=!4m15!1m6!3m5!1s0x808f81259556cefd:0xcf256f444dae8579!2sNeptune's!8m2!3d37.7713061!4d-122.2781289!4m7!1m0!1m5!1m1!1s0x808f81259556cefd:0xcf256f444dae8579!2m2!1d-122.2781289!2d37.7713061";
  }

  /**
   * Directions event handler for Menu
   */
  googleLink() {
    window.open(this.googleLinkPath, '_blank');
  }

  /**
   * Decorator function controls fixed #navMenu via .sticky
   * @param scroll event listener
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event:any) {
    const number = $event.target.documentElement.scrollTop;
    if (number > 90) {
      this.navIsFixed = true;
    }
    else {
      this.navIsFixed = false;
    }
  }

  /**
   * Event Handler scrolls to selected menu content
   * @param menu 
   */
  viewJump(menu:any) {
    menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /**
   * Event Handler exposes side bar menu
   * @param sideNav sidebar template reference 
   * @param navMenu default template reference 
   */
  openNav(sideNav:any, navMenu:any) {
    sideNav.style.width = '250px';
    navMenu.style.visibility = 'hidden';
  }

  /**
   * Event Handler closes side bar menu
   * @param sideNav sidebar template reference
   * @param navMenu default template reference 
   */
  closeNav(sideNav:any, navMenu:any, path?:any) {
    sideNav.style.width = 0;
    setTimeout(function(){
      navMenu.style.visibility = 'visible'},800);
    switch (path) {
      case '/contact-us':
        return this.router.navigate(['/contact-us'], { relativeTo: this.route });
      case '/info':
        return this.router.navigate([`/info`], { relativeTo: this.route });
      case '/menu':
        return this.router.navigate([`/menu`], { relativeTo: this.route });
    }
  }
}


