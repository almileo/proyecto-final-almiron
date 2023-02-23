import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    const nombreCompleto = `${value} ${args[0]}`
    
    return nombreCompleto;
  }

}
