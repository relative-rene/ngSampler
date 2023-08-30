import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[track-scroll]'
})
export class TrackScrollDirective {

  constructor(private el: ElementRef) {
    console.log('track-scroll', el);
  }

  @HostListener('window:scroll', ['$event'])
  scrollToTop(event) {
    console.debug("Scroll Event", document.body.scrollTop);
    if (document.body.scrollTop > 300)
      document.body.scrollTop = 0;
  }
}
