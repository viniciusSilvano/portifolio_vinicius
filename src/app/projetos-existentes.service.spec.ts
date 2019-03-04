import { TestBed } from '@angular/core/testing';

import { ProjetosExistentesService } from './projetos-existentes.service';

describe('ProjetosExistentesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjetosExistentesService = TestBed.get(ProjetosExistentesService);
    expect(service).toBeTruthy();
  });
});
