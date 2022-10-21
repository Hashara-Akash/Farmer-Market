import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicViewmapComponent } from './public-viewmap.component';

describe('PublicViewmapComponent', () => {
  let component: PublicViewmapComponent;
  let fixture: ComponentFixture<PublicViewmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicViewmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicViewmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
