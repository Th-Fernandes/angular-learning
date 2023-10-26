import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  key = "4FAH-6767-98XC";
  name: string | undefined | null = "asd"

  setName(name: string) {
    this.name = name;
    console.log('hello everyone')
  }

  setNewKey(newKey: string): void {
    this.key = newKey;
  }
}
