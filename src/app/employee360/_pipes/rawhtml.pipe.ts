import {Pipe, PipeTransform,} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'rawHTML'
})

export class RawHTML implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
