import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeneralNotice } from './gennotice.model';
import { generalNoticeData } from './gennoticedata';
// import { noticeData } from './gennoticedata';
// import { Notice } from './gennotice.model';

// import { emailData } from './data';
// import { Email } from './inbox.model';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-gennotice',
  templateUrl: './gennotice.component.html',
  styleUrls: ['./gennotice.component.scss']
})

/**
 * Inbox Component
 */
export class GeneralNoticeComponent implements OnInit {

  public Editor = ClassicEditor;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  // paginated email data
  generalNoticeData!: Array<GeneralNotice>;
  //emailData!: Array[];
  generalNoticeDataIds: number[] = [];
  // page number
  page = 1;
  // default page size
  pageSize = 15;
  // total number of records
  totalRecords = 0;
  // start and end index
  startIndex = 1;
  endIndex = 15;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.generalNoticeData = generalNoticeData;
    this.totalRecords = generalNoticeData.length;

    //BreadCrumb 
    this.breadCrumbItems = [
      { label: 'Employee' },
      { label: 'Notice', active: true }
    ];
  }

  /**
   * Open modal
   * @param content content
   */
  open(content: any) {
    this.modalService.open(content, { centered: true });
  }

  /***
   * send mail select multiple mail
   */
  selectMail(event: any, id: any) {
    if (event.target.checked) {
      this.generalNoticeDataIds.push(id);
    } else {
      this.generalNoticeDataIds.splice(this.generalNoticeDataIds.indexOf(id), 1);
    }
  }

  /***
   * Confirmation mail model
   */
  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        this.deleteMail();
        Swal.fire('Deleted!', 'Mail has been deleted.', 'success');
      }
    });
  }

  /***
   * Delete Mail
   */
  deleteMail() {
    const found = this.generalNoticeData.some(r => this.generalNoticeDataIds.indexOf(r.id) >= 0);
    if (found) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.generalNoticeDataIds.length; i++) {
        const obj: any = this.generalNoticeData.find(o => o.id === this.generalNoticeDataIds[i]);
        this.generalNoticeData.splice(this.generalNoticeData.indexOf(obj), 1);
      }
    }
    this.generalNoticeDataIds = [];
  }

  /**
   * Handle on page click event
   */
  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize + 1;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    this.generalNoticeData = generalNoticeData.slice(this.startIndex - 1, this.endIndex - 1);
  }


}
