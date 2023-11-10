import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastrieTagColor'
})
export class PastryTagColorPipe implements PipeTransform {

  transform(tag: string) {
    switch (tag) {
      case 'yummy':
        return "yummy-color";
      case 'sucré':
        return "sucré-color";
      case 'dessert':
        return "dessert-color";
      case 'chocolat':
        return "chocolat-color";
      default:
        return "default-color"; 
    }
  }

}
