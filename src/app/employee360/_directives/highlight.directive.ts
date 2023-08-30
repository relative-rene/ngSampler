import { Directive, ElementRef, HostListener, Input } from '@angular/core';
/**
 * Directive provides the functionality of the @Directive decorator.
 * ElementRef injects into the directive's constructor so the code can access the DOM element.
 * Input allows data to flow from the binding expression into the directive.
 * @HostListener decorator lets you subscribe to events of the DOM element that hosts an attribute directive.
 */

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    console.log('highlight', el);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
}
