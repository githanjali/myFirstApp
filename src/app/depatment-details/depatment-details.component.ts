import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-depatment-details',
  templateUrl: './depatment-details.component.html',
  styleUrls: ['./depatment-details.component.css']
})
export class DepatmentDetailsComponent implements OnInit {
  public departmentId:any;
  
  public deparments=[

    {
      "name":"angular",
      "version":"v3",
      "author":"mahee",
      "id":"1"
    },
    {
      "name":"node",
      "version":"v4",
      "author":"ravir",
      "id":"2"
    },
    {
      "name":"vue",
      "version":"v2",
      "author":"neth",
      "id":"3"
    }
  ];

  public  arrayOfObjects = [{ 'id': 1, 'name': 'kiran' }, { 'id': 2, 'name': 'Franc' }, { 'id': 1, 'name': 'kiran' }];
  
public numberArray = [ 12, 5, 1, 91, 46, 23 ];
public stringArray = [ 'kiran','ebc','zen','abc' ];
 
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
   

   let id= parseInt( this.route.snapshot.paramMap.get('id'));
   this.departmentId=id;
   
  this.loadash();

  }
   
  loadash(){
    let uniqObjects=_.uniqWith(this.arrayOfObjects, _.isEqual);
    console.log("Delete unique Elements with:   _.uniqWith ",uniqObjects) ;
    console.log(" Check is empty    : _.isEmpty", _.isEmpty({}));
    console.log(" Sorting any array int :_.sortBy", _.sortBy(this.numberArray));
    console.log(" Sorting any array string : _.sortBy", _.sortBy(this.stringArray));

  }

}
