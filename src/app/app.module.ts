import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
