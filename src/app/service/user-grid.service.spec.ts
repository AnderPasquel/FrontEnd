import { TestBed } from '@angular/core/testing';

import { UserGridService } from './user-grid.service';

describe('UserGridService', () => {
  let service: UserGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
