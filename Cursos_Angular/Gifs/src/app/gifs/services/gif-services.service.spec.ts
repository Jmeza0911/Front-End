import { TestBed } from '@angular/core/testing';

import { GifServicesService } from './gif-services.service';

describe('GifServicesService', () => {
  let service: GifServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
