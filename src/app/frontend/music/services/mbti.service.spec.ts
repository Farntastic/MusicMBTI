import { TestBed } from '@angular/core/testing';

import { MBTIService } from './mbti.service';

describe('MbtiService', () => {
  let service: MBTIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MBTIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
