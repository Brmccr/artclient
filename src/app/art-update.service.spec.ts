import { TestBed } from '@angular/core/testing';

import { ArtUpdateService } from './art-update.service';

describe('ArtUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtUpdateService = TestBed.get(ArtUpdateService);
    expect(service).toBeTruthy();
  });
});
