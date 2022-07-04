import { Select2Data } from 'ng-select2-component';
import { Component, OnInit, ViewChild, EventEmitter, Output, Input, } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbDate, NgbCalendar, NgbDateStruct, } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, THEME } from 'ng-wizard';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-employeeleave',
  templateUrl: './employeeleave.component.html',
  styleUrls: ['./employeeleave.component.scss']
})

/**
 * Profile Component
 */
export class EmployeeLeaveComponent implements OnInit {


  public Editor = ClassicEditor;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  selectedDate = '';
  basicDemoValue = '2017-01-01';

  date1 = new Date(new Date().setDate(new Date().getDate() + 2));
  date2 = new Date(new Date().setDate(new Date().getDate() + 4));

  disabledDate = [this.date1, this.date2];


  /***
   * file upload
   */
  // files: File[] = [];


  // Form submition
  submit!: boolean;
  formsubmit!: boolean;
  validationform!: FormGroup; // bootstrap validation form
  tooltipvalidationform!: FormGroup; // bootstrap tooltip validation form

  ApplicationType: Select2Data = [
    {
      value: 'Fresh',
      label: 'Fresh',
      data: {
        name: 'Fresh',
      },
      templateId: 'template1',
      id: 'option-fresh',
    },
    {
      value: 'Re-Issue',
      label: 'Re-Issue',
      data: {
        name: 'Re-Issue',
      },
      templateId: 'template2',
      id: 'option-reissue',
    },
  ];
    
  DocumentPage: Select2Data = [
    {
      value: '32 Pages',
      label: '32 Pages',
      data: {
        name: '32 Pages',
      },
      templateId: 'template2',
      id: 'option-32Pages',
    },
    {
      value: '64 Pages',
      label: '64 Pages',
      data: {
        name: '64 Pages',
      },
      templateId: 'template3',
      id: 'option-64Pages',
    }
  ];

  DocumentType: Select2Data = [
    {
      value: 'Standard',
      label: 'Standard',
      data: {
        name: 'Standard',
      },
      templateId: 'template2',
      id: 'option-Standard',
    },
    {
      value: 'Diplomatic',
      label: 'Diplomatic',
      data: {
        name: 'Diplomatic',
      },
      templateId: 'template3',
      id: 'option-Diplomatic',
    },
    {
      value: 'Official',
      label: 'Official',
      data: {
        name: 'Official',
      },
      templateId: 'template3',
      id: 'option-Official',
    },
    {
      value: 'Refugee',
      label: 'Refugee',
      data: {
        name: 'Refugee',
      },
      templateId: 'template3',
      id: 'option-Refugee',
    },
];


constructor(
  public formBuilder: FormBuilder,
  private calendar: NgbCalendar,
  private ngWizardService: NgWizardService
) { }

model!: NgbDateStruct;
date!: { year: number; month: number };
hoveredDate!: NgbDate;
fromNGDate!: NgbDate;
toNGDate!: NgbDate;
hidden!: boolean;
selected: any;
@Input() fromDate!: Date;
@Input() toDate!: Date;
@Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();

@ViewChild('dp', { static: true }) datePicker: any;

ngOnInit(): void {
  //BreadCrumb 
  this.breadCrumbItems = [
    { label: 'Employee' },
    { label: 'Leave', active: true }
  ];


  /**
   * Bootstrap tooltip validation form data
   */
  this.tooltipvalidationform = this.formBuilder.group({
    firstName: [
      '',
      [Validators.required, Validators.pattern('[a-zA-Z0-9]+')],
    ],
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    state: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
  });
}

/**
 * Returns form
 */
get form() {
  return this.validationform.controls;
}

/**
 * returns tooltip validation form
 */
get formData() {
  return this.tooltipvalidationform.controls;
}

/**
 * Bootsrap validation form submit method
 */
validSubmit() {
  this.submit = true;
}

/**
 * Bootstrap tooltip form validation submit method
 */
formSubmit() {
  this.formsubmit = true;
}

/**
 * Is hovered over date
 * @param date date obj
 */
isHovered(date: NgbDate) {
  return (
    this.fromNGDate &&
    !this.toNGDate &&
    this.hoveredDate &&
    date.after(this.fromNGDate) &&
    date.before(this.hoveredDate)
  );
}

/**
 * @param date date obj
 */
isInside(date: NgbDate) {
  return date.after(this.fromNGDate) && date.before(this.toNGDate);
}

/**
 * @param date date obj
 */
isRange(date: NgbDate) {
  return (
    date.equals(this.fromNGDate) ||
    date.equals(this.toNGDate) ||
    this.isInside(date) ||
    this.isHovered(date)
  );
}

/**
 * Select the today
 */
selectToday() {
  this.model = this.calendar.getToday();
}

// onSelect(event: any) {
//   this.files.push(...event.addedFiles);
// }

// onRemove(event: any) {
//   this.files.splice(this.files.indexOf(event), 1);
// }

/***
 * Wizard step changed
 */
stepChanged(args: StepChangedArgs) {
  console.log(args.step);
}

isValidTypeBoolean: boolean = true;

/***
 * Wizard valid Function return boolean
 */
isValidFunctionReturnsBoolean(args: StepValidationArgs) {
  return true;
}

/***
 * Wizard step changed return observable
 */
isValidFunctionReturnsObservable(args: StepValidationArgs) {
  return of(true);
}

}

