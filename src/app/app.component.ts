import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basics';
  menuSelected:String='recipies'

  onNavigate=(e:String)=>{
    this.menuSelected=e
  }
}
