import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input() key: string | undefined;
  @Output() setNewKey = new EventEmitter();
}