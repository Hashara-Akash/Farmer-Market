import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmasterDashboardComponent } from './webmaster-dashboard.component';

describe('WebmasterDashboardComponent', () => {
  let component: WebmasterDashboardComponent;
  let fixture: ComponentFixture<WebmasterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebmasterDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebmasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
