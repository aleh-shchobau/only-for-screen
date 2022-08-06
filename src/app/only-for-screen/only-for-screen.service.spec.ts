import { TestBed } from '@angular/core/testing';

import { OnlyForScreenService } from './only-for-screen.service';

describe('OnlyForScreenService', () => {
  let service: OnlyForScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyForScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
