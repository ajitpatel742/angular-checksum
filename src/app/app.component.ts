import { Component } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  
  ngOnInit() {
    const md5 = new Md5();
  alert(md5.appendStr('10,000').end());

  }
}
