import { Component, OnInit, ViewChild } from '@angular/core';
import { emailSentBarChart,
         monthlyEarningChart,
         transactions,
         orders,
         users,
         barChart,
         piechart,
         basicpolarchart,
         basicColumChart,
         } from './dashboards.data';
import { ChartType } from './dashboards.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})

/**
 * Dashboard Component
 */
export class DashboardsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  emailSentBarChart!: ChartType;
  basicpolarchart!: ChartType;
  barChart!: ChartType;
  piechart!: ChartType;
  basicColumChart!: ChartType;
  monthlyEarningChart!: ChartType;
  transactions: any;
  orders: any;
  users: any;
  @ViewChild('content') content: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

    //BreadCrumb 
    this.breadCrumbItems = [
      { label: 'Dashboard' },
      { label: 'Dashboard', active: true }
    ];

    /**
     * Fetches the data
     */
    this.fetchData();
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.openModal();
  //   }, 2000);
  // }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.emailSentBarChart = emailSentBarChart;
    this.monthlyEarningChart = monthlyEarningChart;
    this.transactions = transactions;
    this.orders = orders;
    this.piechart = piechart;
    this.users = users;
    this.basicpolarchart = basicpolarchart;
    this.barChart = barChart;
    this.basicColumChart = basicColumChart;
  }

  /***
   * Subscribe Model open
   */
  // openModal() {
  //   this.modalService.open(this.content, { centered: true });
  // }
}
