import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGooglemapComponent } from './show-googlemap.component';

describe('ShowGooglemapComponent', () => {
  let component: ShowGooglemapComponent;
  let fixture: ComponentFixture<ShowGooglemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGooglemapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGooglemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
