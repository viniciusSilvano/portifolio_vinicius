import { TestBed } from '@angular/core/testing';

import { ProjetosEspecificacaoService } from './projetos-especificacao.service';

describe('ProjetosEspecificacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjetosEspecificacaoService = TestBed.get(ProjetosEspecificacaoService);
    expect(service).toBeTruthy();
  });
});
