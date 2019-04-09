import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChildUpdateComponent } from './profile-child-update.component';

describe('ProfileChildUpdateComponent', () => {
  let component: ProfileChildUpdateComponent;
  let fixture: ComponentFixture<ProfileChildUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileChildUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChildUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
