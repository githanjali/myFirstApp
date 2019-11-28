import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tem-component',
  templateUrl: './tem-component.component.html',
  styleUrls: ['./tem-component.component.css']
})
export class TemComponentComponent implements OnInit {


  @Input('fromEmployee') public employee;
  
  constructor() { }

  ngOnInit() {
  }

}
