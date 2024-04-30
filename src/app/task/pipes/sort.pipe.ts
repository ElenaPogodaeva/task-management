import { Pipe, PipeTransform } from '@angular/core';
import { PriorityModel } from '../models/task.model';

function compare(a: any, b: any, reverse: boolean) {
  return (a < b ? -1 : 1) * (reverse ? -1 : 1);
}

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(items: any[], sortField: string, sortReverse: boolean): any[] {
    return [...items].sort((a, b) => {
      const first = a[sortField];
      const second = b[sortField];
      if (sortField === 'deadline') {
        const firstDate = new Date(first).getTime();
        const secondDate = new Date(second).getTime();
        return compare(firstDate, secondDate, sortReverse);
      }
      if (sortField === 'priority') {
        const priorityOrder = Object.values(PriorityModel);
        const firstIndex = priorityOrder.indexOf(first);
        const secondIndex = priorityOrder.indexOf(second);
        return compare(firstIndex, secondIndex, sortReverse);
      }
      if (sortField === 'assignee') {
        return compare(first, second, sortReverse);
      }
      return 0;
    });
  }
}
