import { TestBed } from '@angular/core/testing';

import { DimensionamientosService } from './dimensionamientos.service';

describe('DimensionamientosService', () => {
  let service: DimensionamientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DimensionamientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
