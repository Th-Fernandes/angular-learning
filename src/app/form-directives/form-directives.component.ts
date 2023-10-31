import { Component } from '@angular/core';


@Component({
  selector: 'app-form-directives',
  templateUrl: './form-directives.component.html',
  styleUrls: ['./form-directives.component.scss']
})
export class FormDirectivesComponent {
  item = {name: '', age: ''};

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
