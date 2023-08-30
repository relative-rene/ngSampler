import { Component, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';
import { CarouselComponent, Direction} from '../carousel.component';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html'
})
export class SlideComponent implements OnInit, OnDestroy {
  @Input() public index?: number;
  @Input() public direction?: Direction;
  @Input() public active?: boolean;
  
  @HostBinding('class.active')
  @HostBinding('class.item')
  @HostBinding('class.carousel-item')
  private addClass = true;
  constructor(private carousel: CarouselComponent) {

   }

  /**
   * Lifecycle hook sets slide to active
   */
  public ngOnInit() {
    this.carousel.addSlide(this);
  }

  /**
   * Lifecycle hook cleans up slidecomponent
   */
  public ngOnDestroy() {
    this.carousel.removeSlide(this);
  }
}
