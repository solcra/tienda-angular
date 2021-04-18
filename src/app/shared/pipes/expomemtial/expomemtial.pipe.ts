import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expomemtial'
})
export class ExpomemtialPipe implements PipeTransform {

  transform(value: number): any {
    return Math.pow(value, 2);
  }

}
