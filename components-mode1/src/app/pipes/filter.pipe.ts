import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string): string {
    const filter = value.split(' ');
    return filter[0];
  }

}
