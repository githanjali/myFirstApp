import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  
  
  @Input('parentData') public name2;
  @Input('companyInfo') public companyData;

  @Output() public childEvent = new EventEmitter();

   public name="Welcome to Chitti.io";
   public myId="myid1";
   public myId2="myid2"
   public isDisable=true;
   public success="text-success";
   public danger="text-danger";
   public hasError=false;
   public isSpecial=true;
   public myname="mahesh prince";
  public messageClass={
    "text-success": !this.hasError,
    "text-primary" : this.hasError,
    "text-special" : this.isSpecial
  };
  public colors=['red','green','yellow','blue'];

 
  public students:any;

  constructor() { }

  ngOnInit() {
    this.students= [{
       name:'mahesh',
       class:4,
       dob:new Date()
    },
    {
      name:'ravirala',
      class:7
   }
  ]
  }
  
  onClick(){
       console.log(" Welcome to my new project");
       this.hasError=true;   
       this.isSpecial=false;   
  };

  fireEvent(){
             this.childEvent.emit(" Hay i have emitted from test child component");
  }

}
