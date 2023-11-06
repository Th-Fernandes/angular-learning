import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncrementButtonComponent } from './IncrementButton/incrementButton.component';
import { FormDirectivesComponent } from './form-directives/form-directives.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    IncrementButtonComponent,
    FormDirectivesComponent,
    FormBuilderComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: ' ', component: AppComponent },
      { path: 'form-directives', component: FormDirectivesComponent },
      { path: 'form-builder', component: FormBuilderComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
