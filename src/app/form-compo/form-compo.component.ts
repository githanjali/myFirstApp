import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-form-compo',
  templateUrl: './form-compo.component.html',
  styleUrls: ['./form-compo.component.css']
})
export class FormCompoComponent implements OnInit {

  addEmployee;
  public temp1:any;
  public employee:any;
  public temp='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShexODCmXpx6pl0ilTVouIzAFJG0PKcBiWjVuzmg79C4bY3oZ_&s';

  constructor(  private formBuilder: FormBuilder,
                private empService:EmployeeService
    ) { }

  ngOnInit() {


    
    this.addEmployee = this.formBuilder.group({
      name: '',
      age: '',
      salary:''
      
    });

   

  }

  onSubmit(addEmployeeData) {
    // Process checkout data here
    console.log("Employee",this.addEmployee);


     this.employee=this.empService.getEmployees()


     this.temp1=this.addEmployee.value;

     this.temp1.image=this.temp;
     this.temp1.id= this.employee.length+1;

      this.empService.employeesList.push(this.temp1);
     

   // this.addEmployee.reset();
  }

}
