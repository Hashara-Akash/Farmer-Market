import { TestBed } from '@angular/core/testing';

import { WebMasterAuthGuard } from './webmaster-auth.guard';

describe('WebMasterAuthGuard', () => {
  let guard: WebMasterAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WebMasterAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
