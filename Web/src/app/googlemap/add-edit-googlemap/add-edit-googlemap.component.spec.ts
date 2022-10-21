import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGooglemapComponent } from './add-edit-googlemap.component';

describe('AddEditGooglemapComponent', () => {
  let component: AddEditGooglemapComponent;
  let fixture: ComponentFixture<AddEditGooglemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGooglemapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGooglemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
