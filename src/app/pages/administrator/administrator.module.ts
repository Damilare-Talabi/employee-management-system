import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../../shared/shared.module';
import { AdministratorRoutingModule } from './administrator-routing.modules';

import { Select2Module } from 'ng-select2-component';

import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgWizardModule} from 'ng-wizard';
import { FlatpickrModule } from 'angularx-flatpickr';

import { StarterComponent } from './starter/starter.component';
import { NgbNavModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RetiredSortableDirective } from './retired-datatable/retiredsortable.directive';
import { RetirdDatatableComponent } from './retired-datatable/retireddatatable.component';
import { AdvancedSortableDirective } from './datatable/sortable.directive';
import { DatatableComponent } from './datatable/datatable.component';
import { EmployeeRegisterComponent } from './employee-register/employeeregister.component';
import { EmployeeUpdateComponent } from './employee-update/employeeupdate.component';
import { DepartmentInfoComponent } from './department/department-info/departmentinfo.component';
import { DepartmentUpdateComponent} from './department/departmentupdate/departmentupdate.component';
import { NoticeComponent } from './employee-notice/notice/notice.component';
import { NoticereadComponent } from './employee-notice/notice-read/noticeread.component';


@NgModule({
  declarations: [
    StarterComponent,
    DatatableComponent,
    NoticeComponent,
    NoticereadComponent,
    EmployeeRegisterComponent,
    EmployeeUpdateComponent,
    DepartmentInfoComponent,
    DepartmentUpdateComponent,
    AdvancedSortableDirective,
    RetiredSortableDirective,
    RetirdDatatableComponent
    

  ],
  imports: [
    CommonModule,
    SharedModule,
    AdministratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,    
    NgbNavModule,
    Select2Module,
    NgbDropdownModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgWizardModule,
    FlatpickrModule.forRoot(),
    SimplebarAngularModule,
    CKEditorModule
  ]
})
export class AdministratorModule { }
