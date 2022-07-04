import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.scss']
})

/**
 * Profile Component
 */
export class EmployeeUpdateComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    //BreadCrumb 
    this.breadCrumbItems = [
      { label: 'Employee' },
      { label: 'Update', active: true }
    ];
  }

}
