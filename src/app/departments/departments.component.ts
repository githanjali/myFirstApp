import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

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
  ]

  constructor( private route:Router) { }

  ngOnInit() {
  }
   onSelect(department){
       this.route.navigate(['/departments',department.id]);
   }
}
