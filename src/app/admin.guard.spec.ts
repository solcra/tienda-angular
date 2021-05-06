import { TestBed } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';
import { AuthService } from './core/services/auth.service';

describe('AdminGuard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
