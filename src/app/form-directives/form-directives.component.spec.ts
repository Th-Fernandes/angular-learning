import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDirectivesComponent } from './form-directives.component';

describe('FormDirectivesComponent', () => {
  let component: FormDirectivesComponent;
  let fixture: ComponentFixture<FormDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDirectivesComponent]
    });
    fixture = TestBed.createComponent(FormDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
