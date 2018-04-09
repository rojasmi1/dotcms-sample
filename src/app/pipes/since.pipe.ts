import { Pipe, PipeTransform } from '@angular/core';
import { distanceInWordsToNow } from 'date-fns';

@Pipe({
  name: 'since'
})
export class SincePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return distanceInWordsToNow(value);
  }

}
