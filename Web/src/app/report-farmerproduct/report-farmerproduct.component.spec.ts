import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFarmerproductComponent } from './report-farmerproduct.component';

describe('ReportFarmerproductComponent', () => {
  let component: ReportFarmerproductComponent;
  let fixture: ComponentFixture<ReportFarmerproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFarmerproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFarmerproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
