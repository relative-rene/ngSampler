import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{
  public NextPhotoInterval = 5000;
  public noLoopSlides = true;
  public slides: Array<any> = [];

  constructor(){}

  /**
   * Lifecycle hook sets the slides to be displayed
   */
  ngOnInit() {
    this.addNewSlide();
  }

  private addNewSlide() {
    this.slides.push(
      { image: './assets/img/latte-menu.jpg', text: 'Latte' },
      { image: './assets/img/prowaffle.jpg', text: 'Amazing Waffles' },
      { image: './assets/img/spammasubi.jpg', text: 'Spammasubi' },
      { image: './assets/img/fried-rolls.jpg', text: 'Fried Rolls' },
      { image: './assets/img/gLatte.jpg', text: 'Matcha Latte' },
      { image: './assets/img/breakfast-grits.jpg', text: 'Bay shrimp and grits' },
      { image: './assets/img/waffle-chicken.jpg', text: 'Chicken and Waffles' },
      { image: './assets/img/busser-station.jpg', text: 'Cool View' },
      { image: './assets/img/bay-shrimp-grits.jpg', text: 'Bay shrimp and grits' },
      { image: './assets/img/avocado-toast-loks-shrimp-grits.jpg', text: 'Seasonal Changes' }
    );
  }
}
