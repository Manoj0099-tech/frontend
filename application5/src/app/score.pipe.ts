import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(others: any,arg1:any,arg2:any): any {
    let sum=others+arg1*4+arg2*6
    return sum;
  }

}
