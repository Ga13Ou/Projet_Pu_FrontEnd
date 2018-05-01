import { TestBed, inject } from '@angular/core/testing';

import { AuthRoleService } from './auth-role.service';

describe('AuthRoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRoleService]
    });
  });

  it('should be created', inject([AuthRoleService], (service: AuthRoleService) => {
    expect(service).toBeTruthy();
  }));
});
