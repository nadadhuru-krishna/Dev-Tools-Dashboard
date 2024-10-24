import { TestBed } from '@angular/core/testing';

import { CommonServiceService } from './common-service.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('CommonServiceService', () => {
  let service: CommonServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(),
        provideHttpClientTesting()]
    });
    service = TestBed.inject(CommonServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
