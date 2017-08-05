import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'textLimit'
})

export class TextLimitPipe implements PipeTransform {
  transform(value: string, limit: number = 14, trail: String = '…'): string {
    if (limit < 0) {
      limit *= -1;
      return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
    } else {
      return value.length > limit ? value.substring(0, limit) + trail : value;
    }
  }
}
