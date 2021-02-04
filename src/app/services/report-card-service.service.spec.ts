import { TestBed } from '@angular/core/testing';

import { ReportCardServiceService } from './report-card-service.service';

describe('ReportCardServiceService', () => {
  let service: ReportCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
