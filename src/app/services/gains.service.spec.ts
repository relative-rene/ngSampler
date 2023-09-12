import { TestBed } from '@angular/core/testing';

import { GainsService } from './gains.service';

describe('GainsService', () => {
  let service: GainsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GainsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
