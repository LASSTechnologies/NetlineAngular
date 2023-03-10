import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estatus'
})
export class EstatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    return value.filter((item: any) => {
      return JSON.stringify(item).includes(args);
    })
  }

}
