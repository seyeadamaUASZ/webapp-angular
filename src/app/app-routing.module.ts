import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeViewComponent} from "./employee-view/employee-view.component";
import {EmployeeProjectComponent} from "./employee-project/employee-project.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee/list',
    pathMatch: 'full',
  },
  {
    path: 'employee/list',
    canActivate:[AuthGuard],
    data:{roles:['Admin']},
    component: EmployeeListComponent,
  },
  {
    path: 'employee/:id',
    component: EmployeeViewComponent,
  },
  {
    path: 'employee_project/list',
    component: EmployeeProjectComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
