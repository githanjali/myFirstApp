import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { error } from 'util';

import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 public employeeList:any;
 public isClicked=false;
 public isChildEnable=false;
public addFormClicked=false;
  

 public employee:any;

public errorMsg='';

  constructor( private employeeService:EmployeeService, private router : Router) { }

  ngOnInit() {

     this.isClicked=true;

     this.employeeList=  this.employeeService.getEmployees();


    //  this.employeeService.getEmlpoyeesFromServer()
    //         .subscribe( 
    //           data => this.employeeList= data,
    //           error =>  this.errorMsg = error
    //           )
            
  }
     
    getEmploeesFromService(){
      this.isClicked=true;
      this.employeeList=  this.employeeService.getEmployees();
    }

   onSelect(employee){
    this.isChildEnable=true;

    this.employee=employee;
   // this.router.navigate(['/employee',employee.id]);
   }

   addEmployee(){
      this.addFormClicked=true;
   }

}
