import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.scss']
})

/**
 * Profile Component
 */
export class EmployeeProfileComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    //BreadCrumb 
    this.breadCrumbItems = [
      { label: 'Employee' },
      { label: 'Profile', active: true }
    ];
  }

}
