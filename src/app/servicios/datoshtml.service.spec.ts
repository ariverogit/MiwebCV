import { TestBed } from '@angular/core/testing';

import { DatoshtmlService } from './datoshtml.service';

describe('DatoshtmlService', () => {
  let service: DatoshtmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoshtmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
