import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize',
})
export class PluralizePipe implements PipeTransform {
  transform(value: number, singular: string): string {
    let s = '';

    if (value == 1) {
      s = singular;
    } else {
      s = singular.endsWith('y')
        ? `${singular.substring(0, singular.length - 1)}ies`
        : `${singular}s`;
    }
    return `${value} ${s}`;
  }
}
