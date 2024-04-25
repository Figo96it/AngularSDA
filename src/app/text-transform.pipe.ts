import { LowerCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform',
  standalone: true
})
export class TextTransformPipe implements PipeTransform {

  transform(value: String): String {
    let result = "";
    for (let i = 0; i < value.length; i++) {
      result += i % 2 === 0 ? result[i].toLowerCase() : result[i].toUpperCase();
    }
    return result;
  }

}
