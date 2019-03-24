import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventviewComponent } from './eventview.component';

describe('EventviewComponent', () => {
  let component: EventviewComponent;
  let fixture: ComponentFixture<EventviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});