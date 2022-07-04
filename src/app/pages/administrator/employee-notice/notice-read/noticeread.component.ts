import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-noticeread',
  templateUrl: './noticeread.component.html',
  styleUrls: ['./noticeread.component.scss']
})

/**
 * Email-Read Component
 */
export class NoticereadComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  public Editor = ClassicEditor;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    //BreadCrumb 
    this.breadCrumbItems = [
      { label: 'Notice' },
      { label: 'Read Notice', active: true }
    ];
  }

  /**
   * Open modal
   * @param content content
   */
  open(content: any) {
    this.modalService.open(content, { centered: true });
  }

  
}
