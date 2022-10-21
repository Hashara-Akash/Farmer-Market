import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFarmerprofileComponent } from './user-farmerprofile.component';

describe('UserFarmerprofileComponent', () => {
  let component: UserFarmerprofileComponent;
  let fixture: ComponentFixture<UserFarmerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFarmerprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFarmerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
