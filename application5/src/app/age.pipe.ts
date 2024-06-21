import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let currentyear=new Date().getFullYear()
    let birthyear=new Date(value).getFullYear()
    return currentyear-birthyear;
  }

}
