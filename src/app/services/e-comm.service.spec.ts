import { TestBed } from '@angular/core/testing';

import { ECommService } from './e-comm.service';

describe('ECommService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ECommService = TestBed.get(ECommService);
    expect(service).toBeTruthy();
  });
});
