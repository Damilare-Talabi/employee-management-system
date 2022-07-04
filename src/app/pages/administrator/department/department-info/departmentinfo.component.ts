import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departmentinfo',
  templateUrl: './departmentinfo.component.html',
  styleUrls: ['./departmentinfo.component.scss']
})

/**
 * Pricing Component
 */
export class DepartmentInfoComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  // contenteditable=true;

  // allowEdit(){
  //   this.contenteditable = !this.contenteditable
  // }

  constructor() { }

  ngOnInit(): void {
    //BreadCrumb 
    this.breadCrumbItems = [
      { label: 'Department' },
      { label: 'Information', active: true }
    ];
  }

}
