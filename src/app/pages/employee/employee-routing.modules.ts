import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfileComponent } from './employee-profile/employeeprofile.component';
import { EmployeeAbsenceComponent } from './employee-absence/employeeabsence.component';
import { EmployeeLeaveComponent } from './employee-leave/employeeleave.component';
import { EmployeeNoticereadComponent } from './gen-notice/employeenotice-read/employeenoticeread.component';
import { GeneralNoticeComponent } from './gen-notice/generalnotice/gennotice.component';


// import { ProductionComponent } from './approval/production.component';

const routes: Routes = [
    {
        path: 'employee/profile',
        component: EmployeeProfileComponent
    },
    {
        path: 'employee/leave',
        component: EmployeeLeaveComponent
    },
    {
        path: 'employee/absence',
        component: EmployeeAbsenceComponent
    },
    {
        path: 'employee/generalnotice',
        component: GeneralNoticeComponent
    },
    {
        path: 'employeenoticeread/:id',
        component: EmployeeNoticereadComponent
    },

    // { path: 'verification', loadChildren: () => import('./verification/verification.module').then(m => m.VerificationModule) },
    // { path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) }  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }