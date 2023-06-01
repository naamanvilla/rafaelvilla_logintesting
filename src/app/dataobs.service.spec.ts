import { TestBed } from '@angular/core/testing';

import { DataobsService } from './dataobs.service';

describe('DataobsService', () => {
  let service: DataobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
