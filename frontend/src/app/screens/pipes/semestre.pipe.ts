import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestre'
})
export class SemestrePipe implements PipeTransform {

  transform(semestre: number): string {

    if (semestre === 1){
      return '1er Semestre';
    }
    return '2do Semestre';

  }

}
