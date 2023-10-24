import { Component } from '@angular/core';

@Component({
  selector: 'app-root-sample',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "angular-learning";
  counter: number = 0;
  name = "";
}
