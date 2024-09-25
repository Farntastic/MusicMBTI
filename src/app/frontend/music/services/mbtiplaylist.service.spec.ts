import { TestBed } from '@angular/core/testing';

import { MbtiplaylistService } from './mbtiplaylist.service';

describe('MbtitypeplaylistService', () => {
  let service: MbtiplaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MbtiplaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
