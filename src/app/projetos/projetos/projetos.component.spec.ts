import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { TecnologiaService } from '../../tecnologias/service/tecnologia.service';
import { TipoProjeto } from '../projetos-especificacao/class/projeto_especificacao';
import { PROJETOS_ESPECIFICACOES } from '../projetos-especificacao/data/PROJETOS_DADOS';
import { ProjetosService } from '../service/projetos.service';
import { ProjetosComponent } from './projetos.component';

describe('ProjetosComponent', () => {
  let component: ProjetosComponent;
  let fixture: ComponentFixture<ProjetosComponent>;
  let projetosService: { getProjetoPessoaisCards: ReturnType<typeof vi.fn>; getProjetoTestesPublicosCards: ReturnType<typeof vi.fn> };
  let tecnologiaService: { findAll: ReturnType<typeof vi.fn> };
  let router: { navigateByUrl: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    projetosService = {
      getProjetoPessoaisCards: vi.fn(() => of(PROJETOS_ESPECIFICACOES.filter(projeto => projeto.tipo === TipoProjeto.PESSOAIS))),
      getProjetoTestesPublicosCards: vi.fn(() => of(PROJETOS_ESPECIFICACOES.filter(projeto => projeto.tipo === TipoProjeto.TESTE_PUBLICOS)))
    };
    tecnologiaService = { findAll: vi.fn(() => [
      { id: 1, nome: 'Zeta' },
      { id: 2, nome: 'Alpha' }
    ]) };
    router = { navigateByUrl: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [ProjetosComponent],
      providers: [
        { provide: ProjetosService, useValue: projetosService },
        { provide: TecnologiaService, useValue: tecnologiaService },
        { provide: Router, useValue: router }
      ]
    })
      .overrideComponent(ProjetosComponent, { set: { template: '' } })
      .compileComponents();

    fixture = TestBed.createComponent(ProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('loads both project groups and the available technologies', () => {
    expect(projetosService.getProjetoPessoaisCards).toHaveBeenCalledOnce();
    expect(projetosService.getProjetoTestesPublicosCards).toHaveBeenCalledOnce();
    expect(component.projetosCardsExistente?.length).toBeGreaterThan(0);
    expect(component.projetosTestesPublicosCards?.length).toBeGreaterThan(0);
    expect(component.accordionProjetoFilters.projetoList).toHaveLength(
      component.projetosCardsExistente!.length + component.projetosTestesPublicosCards!.length
    );
    expect(component.accordionProjetoFilters.tecnologiasParaBusca.map(tecnologia => tecnologia.nome)).toEqual(['Alpha', 'Zeta']);
  });

  it('updates the filter result summary and reports when results should be shown', () => {
    const projetos = PROJETOS_ESPECIFICACOES.slice(0, 2);
    component.onFilter({ projetosCardsFiltered: projetos, qualquerfiltroAcionado: true });

    expect(component.customCardData.descricao).toBe('Quantidade de registros: 2');
    expect(component.filtroPossuiResultado()).toBe(true);
  });

  it('does not report results when no filter is active or the filtered list is empty', () => {
    component.onFilter({ projetosCardsFiltered: [PROJETOS_ESPECIFICACOES[0]], qualquerfiltroAcionado: false });
    expect(component.filtroPossuiResultado()).toBe(false);

    component.onFilter({ projetosCardsFiltered: [], qualquerfiltroAcionado: true });
    expect(component.filtroPossuiResultado()).toBe(false);
  });

  it('clears filtered projects and toggles the cleanup signal', () => {
    component.resultadoProjetoFilter = { projetosCardsFiltered: [PROJETOS_ESPECIFICACOES[0]], qualquerfiltroAcionado: true };
    component.solicitarLimpezaFiltros();

    expect(component.resultadoProjetoFilter.projetosCardsFiltered).toEqual([]);
    expect(component.resultadoProjetoFilter.qualquerfiltroAcionado).toBe(false);
    expect(component.realizarLimpezaFiltros).toBe(true);

    component.solicitarLimpezaFiltros();
    expect(component.realizarLimpezaFiltros).toBe(false);
  });

  it('navigates to the selected project details', () => {
    component.redirect(42);

    expect(router.navigateByUrl).toHaveBeenCalledWith('projeto/42');
  });
});
