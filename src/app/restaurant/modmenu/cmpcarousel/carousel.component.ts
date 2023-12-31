import { Component, OnDestroy, Input } from '@angular/core';
import { SlideComponent } from './slide/slide.component';

export enum Direction { UNKNOWN, NEXT, PREV }

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})

export class CarouselComponent implements OnDestroy {
  @Input() public noWrap!: boolean;
  @Input() public noPause!: boolean;
  @Input() public noTransition!: boolean;
  @Input() public get interval(): number {
    return this._interval;
  }
  constructor(
  private slides: Array<SlideComponent>  = [],
  private currentInterval: any,
  private isPlaying: boolean,
  private destroyed = false,
  private currentSlide: SlideComponent | null,
  private _interval: number
  ){}

  public set interval(value: number) {
    this._interval = value;
    this.restartTimer();
  }

  /**
   * LifeCycle Hook executes goNext private function when component is destroyed
   */
  public ngOnDestroy() {
    this.destroyed = true;
  }

  /**
   * Helper function centralizes whether NEXT or PREVIOUS slide will be displayed
   * @param nextSlide 
   * @param direction 
   */
  public select(nextSlide: SlideComponent, direction: Direction = Direction.UNKNOWN) {
    let nextIndex = nextSlide.index;
    if (direction === Direction.UNKNOWN) {
      direction = nextIndex && nextIndex > this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
    }

    // Prevent this user-triggered transition from occurring if there is already one in progress
    if (nextSlide && nextSlide !== this.currentSlide) {
      this.goNext(nextSlide, direction);
    }
  }
  /**
   * Helper function toggles private isPlaying boolean
   */
  public play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.restartTimer();
    }
  }

  /**
   * Helper function toggles private isPlaying boolean
   */
  public pause() {
    if (!this.noPause) {
      this.isPlaying = false;
      this.resetTimer();
    }
  }

  /**
   * Helper function used to manipulate carousel component
   * @param slide 
   */
  public addSlide(slide: SlideComponent) {
    slide.index = this.slides.length;
    this.slides.push(slide);
    if (this.slides.length === 1 || slide.active) {
      this.select(this.slides[this.slides.length - 1]);
      if (this.slides.length === 1) {
        this.play();
      }
    } else {
      slide.active = false;
    }
  }

  /**
   * Helper function used to manipulate carousel component
   * @param slide 
   */
  public removeSlide(slide: SlideComponent) {
    this.slides.splice(slide.index, 1);

    if (this.slides.length === 0) {
      this.currentSlide = null;
      return;
    }

    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].index = i;
    }
  }

  private goNext(slide: SlideComponent, direction: Direction) {
    if (this.destroyed) {
      return;
    }

    slide.direction = direction;
    slide.active = true;

    if (this.currentSlide) {
      this.currentSlide.direction = direction;
      this.currentSlide.active = false;
    }

    this.currentSlide = slide;
    this.restartTimer();
  }

  private getSlideByIndex(index: number): SlideComponent | undefined {
    let len = this.slides.length;
    for (let i = 0; i < len; ++i) {
      if (this.slides[i].index === index) {
        return this.slides[i];
      }
    }
    return;
  }

  private getCurrentIndex() {
    return !this.currentSlide ? 0 : this.currentSlide.index;
  }

  private next() {
    let newIndex = (this.getCurrentIndex() + 1) % this.slides.length;

    if (newIndex === 0 && this.noWrap) {
      this.pause();
      return;
    }

    return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
  }

  private prev() {
    let newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;

    if (this.noWrap && newIndex === this.slides.length - 1) {
      this.pause();
      return;
    }

    return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
  }

  private restartTimer() {
    this.resetTimer();
    let interval = +this.interval;
    if (!isNaN(interval) && interval > 0) {
      this.currentInterval = setInterval(() => {
        let nInterval = +this.interval;
        if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
          this.next();
        } else {
          this.pause();
        }
      }, interval);
    }
  }

  private resetTimer() {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
      this.currentInterval = null;
    }
  }
}
