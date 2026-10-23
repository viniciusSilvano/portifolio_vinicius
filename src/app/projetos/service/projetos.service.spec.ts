import { TestBed } from '@angular/core/testing';

import { ProjetosService } from './projetos.service';

describe('ProjetosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjetosService = TestBed.inject(ProjetosService);
    expect(service).toBeTruthy();
  });
});
