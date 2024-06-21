import { Pipe, PipeTransform } from '@angular/core';
import { startWith } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sname:any): any {
    if(value=="")
      {
        return value;
      }
    let playerarray:any[]=[]
    for(let i=0;i<value.length;i++)
      {
        let Teamname:string=value[i].Team
        if(Teamname. startsWith(sname))
          {
            playerarray.push(value[i]);
          }
      }  
    return playerarray;
  }

}
