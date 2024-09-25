import { TestBed } from '@angular/core/testing';

import { MusictypeService } from './musictype.service';

describe('MusictypeService', () => {
  let service: MusictypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusictypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
