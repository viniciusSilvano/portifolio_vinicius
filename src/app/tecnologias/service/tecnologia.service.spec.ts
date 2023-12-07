import { TestBed } from '@angular/core/testing';

import { TecnologiaService } from './tecnologia.service';

describe('TecnologiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TecnologiaService = TestBed.get(TecnologiaService);
    expect(service).toBeTruthy();
  });
});
