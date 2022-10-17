import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impura',
  pure: false
})
export class ImpuraPipe implements PipeTransform {

  transform(value: string): string {
    const impura = value.split(' ');
    return impura[1];
  }
}
