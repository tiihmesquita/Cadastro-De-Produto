import { TestBed } from '@angular/core/testing';

import { DevolveProdService } from './devolve-prod.service';

describe('DevolveProdService', () => {
  let service: DevolveProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevolveProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
