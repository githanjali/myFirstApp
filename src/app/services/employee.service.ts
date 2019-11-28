import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url="https://api.myjson.com/bins/j77a6";

  public employee:any;


 public employeesList= [
    {
      "id":1,
      "name":"Mahesh ",
      "age":"24",
      "salary": 1234.00,
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ODgHW7wJWCfFrhDkQPvlr63YtYwn-JAx_M6bPPXJJbrUGChu&s"
    },
    {
     "id":2,
     "name":"Ravirala ",
     "age":"22",
     "salary":456.00,
     "image":"https://www.seoclerk.com/images/membersprofilepic/o/460030.png"
   },
   {
  "id":3,
"name":"geetha",
"age":"23",
"salary":1234.00,
"image":"https://www.mainewomensnetwork.com/Resources/Pictures/vicki%20aqua%20headshot-smallmwn.jpg"
   }
  ]; 

  constructor( private http:HttpClient   ) { }


    public getEmployees():any{
      return this.employeesList;
    };

    public getEmlpoyeesFromServer():Observable<any>{

        return this.http.get(this.url)
         
    };
   public getEmployeeById(id){
    

     this.employee=  _.filter(this.employeesList, (o) => { return o.id==id; });

     
     return  this.employee[0];

   } 




  
}
