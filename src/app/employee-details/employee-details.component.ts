import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public empId ;
  public employee:any;
  constructor(private activeRoute : ActivatedRoute,private empService : EmployeeService) { }

  ngOnInit() {
    let id = parseInt( this.activeRoute.snapshot.paramMap.get('id'));

    this.empId=id;
   console.log("employye id:",id);

    this.getEmployeeDetail(this.empId);

  }
  getEmployeeDetail(id){

 
  this.employee = this.empService.getEmployeeById(id);


  }

}
