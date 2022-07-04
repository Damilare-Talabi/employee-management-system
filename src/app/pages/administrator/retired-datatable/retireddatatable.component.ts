import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { RetiredTable } from './retiredtable.model';
import { retiredtableData } from './retireddata';
import { RetiredService } from './retireddatatable.service';
import { RetiredSortableDirective, SortEvent } from './retiredsortable.directive';

@Component({
  selector: 'app-retireddatatable',
  templateUrl: './retireddatatable.component.html',
  styleUrls: ['./retireddatatable.component.scss'],
  providers: [RetiredService, DecimalPipe]
})

/**
 * Data-Table Component
 */
export class RetirdDatatableComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  tableData!: RetiredTable[];
  hideme: boolean[] = [];
  tables$: Observable<RetiredTable[]>;
  total$: Observable<number>;
  @ViewChildren(RetiredSortableDirective)
  headers!: QueryList<RetiredSortableDirective>;

  public isCollapsed = true;
  constructor(public service: RetiredService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {

    //BreadCrumb 
    this.breadCrumbItems = [
      { label: 'Retired Employee' },
      { label: 'Information', active: true }
    ];
    /***
     * All Data Get
     */
    this._fetchData();
  }

  changeValue(i: any) {
    this.hideme[i] = !this.hideme[i];
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.tableData = retiredtableData;
    for (let i = 0; i <= this.tableData.length; i++) {
      this.hideme.push(true);
    }
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
