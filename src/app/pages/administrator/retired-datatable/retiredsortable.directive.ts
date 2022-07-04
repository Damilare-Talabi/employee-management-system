import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { RetiredTable } from './retiredtable.model';

export type RetiredSortColumn = keyof RetiredTable | '';
export type RetiredSortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: RetiredSortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface SortEvent {
  column: RetiredSortColumn;
  direction: RetiredSortDirection;
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'th[sortable]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})

export class RetiredSortableDirective {

  constructor() { }

  @Input() sortable: RetiredSortColumn = '';
  @Input() direction:RetiredSortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}
