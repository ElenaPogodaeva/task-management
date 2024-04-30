import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterWord: string): any {
    return filterWord
      ? items.filter((item) => item.title.toLowerCase().includes(filterWord))
      : items;
  }
}
