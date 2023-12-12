import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[infinite-scroll]',
  standalone:true
})
export class InfiniteScrollDirective {
  @Output() scrolledToBottom = new EventEmitter();

  constructor(private el: ElementRef) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.scrolledToBottom.emit();
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }
}