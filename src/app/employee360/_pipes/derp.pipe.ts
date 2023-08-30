import { Pipe, PipeTransform } from '@angular/core';

/*
  # Description:
  Repackages an array subset as a new array.
  corrects
  main.bundle.js:43897 Error:
  Cannot find a differ supporting object '[object Object]' of type 'object'. NgFor only supports binding to Iterables such as Arrays.
*/

@Pipe({ name: 'derp' })
export class DerpPipe implements PipeTransform {
  transform(value, args) {
    if (Array.isArray(value)) {
      return Array.from(value);
    } else {
      return [value];
    }
  }
}
