import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChildAddComponent } from './profile-child-add.component';

describe('ProfileChildAddComponent', () => {
  let component: ProfileChildAddComponent;
  let fixture: ComponentFixture<ProfileChildAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileChildAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChildAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
