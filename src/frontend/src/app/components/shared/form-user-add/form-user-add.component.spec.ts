import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserAddComponent } from './form-user-add.component';

describe('FormUserAddComponent', () => {
  let component: FormUserAddComponent;
  let fixture: ComponentFixture<FormUserAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
