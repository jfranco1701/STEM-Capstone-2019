import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertermsComponent } from './registerterms.component';

describe('RegistertermsComponent', () => {
  let component: RegistertermsComponent;
  let fixture: ComponentFixture<RegistertermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistertermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistertermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
