import { TestBed } from '@angular/core/testing';

import { ControlAccesoESPService } from './control-acceso-esp.service';

describe('ControlAccesoESPService', () => {
  let service: ControlAccesoESPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlAccesoESPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
