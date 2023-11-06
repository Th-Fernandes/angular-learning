import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {
  productNameControl = new FormControl(); 

  setValueToRandomHash() {
    let hash = '';
    for(let i = 0; i <= 10; i++ )
      hash += String(Math.floor(Math.random() * 10 ))
    this.productNameControl.setValue(hash)
  }
}
