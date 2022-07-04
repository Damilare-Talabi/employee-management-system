import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardsComponent } from './dashboards/dashboards.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardsComponent
  },
  {
    path: 'applicant/profile',
    component: ProfileComponent
  },
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  { path: 'administrator', loadChildren: () => import('./administrator/administrator.module').then(m => m.AdministratorModule) },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }