import { TestBed } from '@angular/core/testing';

import { MusictypeplaylistService } from './musictypeplaylist.service';

describe('MusictypeplaylistService', () => {
  let service: MusictypeplaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusictypeplaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
