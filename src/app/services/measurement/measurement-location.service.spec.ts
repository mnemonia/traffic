import { TestBed } from '@angular/core/testing';

import { MeasurementLocationService } from './measurement-location.service';

describe('MeasurementLocationService', () => {
  let service: MeasurementLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeasurementLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
