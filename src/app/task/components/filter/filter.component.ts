import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  sortField: string = '';

  sortReverse: boolean = false;

  @Output() sort = new EventEmitter<{ sortField: string; sortReverse: boolean }>();

  @Output() filterByWord = new EventEmitter<Event>();

  sortBy(sortField: string) {
    this.sortReverse = this.sortField === sortField ? !this.sortReverse : false;
    this.sortField = sortField;
    this.sort.emit({ sortField: this.sortField, sortReverse: this.sortReverse });
  }
}
