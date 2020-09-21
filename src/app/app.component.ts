import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rentificialUI';
  parentData = "SA"
  childToParentData=[];

  recieveValue($event){
    this.childToParentData.push($event);
    console.log(this.childToParentData)
  }
}
