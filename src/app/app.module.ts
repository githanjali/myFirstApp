import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentsComponent } from './departments/departments.component';
import { DepatmentDetailsComponent } from './depatment-details/depatment-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TemComponentComponent } from './tem-component/tem-component.component';
import { FormCompoComponent } from './form-compo/form-compo.component';



@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    EmployeeListComponent,
    DepartmentsComponent,
    DepatmentDetailsComponent,
    EmployeeDetailsComponent,
    TemComponentComponent,
    FormCompoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routingComponents=[

    DepartmentsComponent,
    DepatmentDetailsComponent
]