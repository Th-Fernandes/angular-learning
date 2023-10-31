import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncrementButtonComponent } from './IncrementButton/incrementButton.component';
import { FormDirectivesComponent } from './form-directives/form-directives.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IncrementButtonComponent,
    FormDirectivesComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: ' ', component: AppComponent },
      { path: 'form-directives', component: FormDirectivesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
