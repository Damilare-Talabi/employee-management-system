import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeProfileComponent } from './employee-profile/employeeprofile.component';
import { EmployeeAbsenceComponent } from './employee-absence/employeeabsence.component';
import { EmployeeLeaveComponent } from './employee-leave/employeeleave.component';
import { EmployeeRoutingModule } from './employee-routing.modules';
import { EmployeeNoticereadComponent } from './gen-notice/employeenotice-read/employeenoticeread.component';
import { GeneralNoticeComponent } from './gen-notice/generalnotice/gennotice.component';

import { NgbNavModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Select2Module } from 'ng-select2-component';

import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgWizardModule} from 'ng-wizard';
import { FlatpickrModule } from 'angularx-flatpickr';



@NgModule({
  declarations: [
    EmployeeProfileComponent,
    EmployeeLeaveComponent,
    EmployeeAbsenceComponent,
    EmployeeNoticereadComponent,
    GeneralNoticeComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SimplebarAngularModule,
    NgbDatepickerModule,
    NgWizardModule,
    Select2Module,
    FlatpickrModule.forRoot(),
    CKEditorModule
  ]
})
export class EmployeeModule { }