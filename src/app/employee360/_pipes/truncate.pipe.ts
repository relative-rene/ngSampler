import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.substring(0, 100) + '...';
  }

}
