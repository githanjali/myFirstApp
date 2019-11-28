import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepatmentDetailsComponent } from './depatment-details/depatment-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


const routes: Routes = [

  {
    path:'employees',
    component:EmployeeListComponent
  },
  {
   path:'employee/:id',
   component:EmployeeDetailsComponent
  },
  {
    path:'departments',
    component:DepartmentsComponent
  },
  {
    path:'departments/:id',
    component:DepatmentDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
