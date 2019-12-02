import { TestBed } from '@angular/core/testing';

import { ArtdetailService } from './artdetail.service';

describe('ArtdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtdetailService = TestBed.get(ArtdetailService);
    expect(service).toBeTruthy();
  });
});
