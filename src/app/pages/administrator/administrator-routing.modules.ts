import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { DatatableComponent } from './datatable/datatable.component';
import { EmployeeRegisterComponent } from './employee-register/employeeregister.component';
import { EmployeeUpdateComponent } from './employee-update/employeeupdate.component';
import { DepartmentInfoComponent } from './department/department-info/departmentinfo.component';
import { DepartmentUpdateComponent } from './department/departmentupdate/departmentupdate.component';
import { RetirdDatatableComponent } from './retired-datatable/retireddatatable.component';
import { NoticeComponent } from './employee-notice/notice/notice.component';
import { NoticereadComponent } from './employee-notice/notice-read/noticeread.component';

const routes: Routes = [
    {
        path: 'starter',
        component: StarterComponent
    },
    {
        path: 'employeeinfo',
        component: DatatableComponent
    },
    {
        path: 'employeeregister',
        component: EmployeeRegisterComponent
    },
    {
        path: 'employeeupdate',
        component: EmployeeUpdateComponent
    },
    {
        path: 'departmentinfo',
        component: DepartmentInfoComponent
    },
    {
        path: 'departmentupdate',
        component: DepartmentUpdateComponent
    },
    {
        path: 'employeeretired',
        component: RetirdDatatableComponent
    },
    {
        path: 'notice',
        component: NoticeComponent
    },
    {
        path: 'noticeread/:id',
        component: NoticereadComponent
    },


    // {
    //     path: 'approval/escalation',
    //     component: ApprovalComponent
    // },
    // { path: 'verification', loadChildren: () => import('./verification/verification.module').then(m => m.VerificationModule) },
    // { path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministratorRoutingModule { }