import { Component } from "@angular/core";

@Component({
  selector: 'app-increment-button',
  templateUrl: './incrementButton.component.html'
})
export class IncrementButtonComponent { 
  counter: number = 0;
} 