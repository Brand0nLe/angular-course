import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  data = {title: 'angular core deep dive'
};



onLogoClicked(){
  alert('Hello world');
}


onKeyUp(newTitle:string){
  this.data.title = newTitle;
}



}


