import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  optionLoaded = "recepes";
  onNavigation(option:string){
    this.optionLoaded = option;
  }
}
