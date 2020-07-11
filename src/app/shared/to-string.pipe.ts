import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString'
})
export class ToStringPipe implements PipeTransform {

  transform(value: any[], withField: string): unknown {
    let stringArray: string[] = [];
    value.forEach((element: Object) => {
      stringArray.push(element[withField])
    });
    return stringArray.join(', ');
  }

}
