import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'esActivo'
})
export class EsActivoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const esActivo = value ? args[0] : args[1]
    return esActivo;
  }

}
