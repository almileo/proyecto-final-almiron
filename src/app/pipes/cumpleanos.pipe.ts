import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cumpleanos'
})
export class CumpleanosPipe implements PipeTransform {

  transform(value: Date, ...args: any[]): string {
    console.log('val: ', value);
    
    const fecha = value;
    return 'null';
  }

}
