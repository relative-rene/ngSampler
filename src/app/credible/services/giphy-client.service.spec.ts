import { TestBed } from '@angular/core/testing';

import { GiphyClientService } from './giphy-client.service';

describe('GiphyClientService', () => {
  let service: GiphyClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
