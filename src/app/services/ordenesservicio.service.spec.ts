import { TestBed } from '@angular/core/testing';

import { OrdenesservicioService } from './ordenesservicio.service';

describe('OrdenesservicioService', () => {
  let service: OrdenesservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenesservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
