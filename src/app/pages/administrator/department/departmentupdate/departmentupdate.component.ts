import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departmentupdate',
  templateUrl: './departmentupdate.component.html',
  styleUrls: ['./departmentupdate.component.scss']
})

/**
 * Starter Component
 */
export class DepartmentUpdateComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    //BreadCrumb 
    this.breadCrumbItems = [
      { label: 'Department' },
      { label: 'Update', active: true }
    ];
  }

}
