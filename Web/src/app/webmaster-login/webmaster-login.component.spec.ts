import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmasterLoginComponent } from './webmaster-login.component';

describe('WebmasterLoginComponent', () => {
  let component: WebmasterLoginComponent;
  let fixture: ComponentFixture<WebmasterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebmasterLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebmasterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
