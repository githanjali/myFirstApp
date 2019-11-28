import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Sample';
  public name="Mahesh Ravirala";
  public jsonDate={

    name:'appup',
    version:'2.0',
    company: 'agileCRM'
  };
  public message='';
}
