import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Collapse } from '../../comuns/class/accordion-card';
import { PROJETOS_ESPECIFICACOES } from './data/PROJETOS_DADOS';
import { ProjetosService } from '../service/projetos.service';
import { ProjetosEspecificacaoComponent } from './projetos-especificacao.component';

describe('ProjetosEspecificacaoComponent', () => {
  let component: ProjetosEspecificacaoComponent;
  let fixture: ComponentFixture<ProjetosEspecificacaoComponent>;
  let routerEvents: Subject<NavigationEnd>;
  let projetosService: { getProjetoEspecificaoById: ReturnType<typeof vi.fn> };
  let router: { events: Subject<NavigationEnd>; navigateByUrl: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    routerEvents = new Subject<NavigationEnd>();
    projetosService = { getProjetoEspecificaoById: vi.fn(id => of(PROJETOS_ESPECIFICACOES.find(projeto => projeto.id === id))) };
    router = { events: routerEvents, navigateByUrl: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [ProjetosEspecificacaoComponent],
      providers: [
        { provide: ProjetosService, useValue: projetosService },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => String(PROJETOS_ESPECIFICACOES[0].id) } } } },
        { provide: Router, useValue: router }
      ]
    })
      .overrideComponent(ProjetosEspecificacaoComponent, { set: { template: '' } })
      .compileComponents();

    fixture = TestBed.createComponent(ProjetosEspecificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('loads the project identified by the route parameter', () => {
    const projeto = PROJETOS_ESPECIFICACOES[0];

    expect(projetosService.getProjetoEspecificaoById).toHaveBeenCalledWith(projeto.id);
    expect(component.getProjetoEspecificacao()).toEqual(projeto);
  });

  it('loads a different project after a matching navigation event', () => {
    const projeto = PROJETOS_ESPECIFICACOES[1];
    routerEvents.next(new NavigationEnd(1, `/projeto/${projeto.id}`, `/projeto/${projeto.id}`));

    expect(projetosService.getProjetoEspecificaoById).toHaveBeenLastCalledWith(projeto.id);
    expect(component.getProjetoEspecificacao()).toEqual(projeto);
  });

  it('ignores navigation events outside project detail routes', () => {
    const callCount = projetosService.getProjetoEspecificaoById.mock.calls.length;
    routerEvents.next(new NavigationEnd(2, '/contato', '/contato'));

    expect(projetosService.getProjetoEspecificaoById).toHaveBeenCalledTimes(callCount);
  });

  it('toggles a matching accordion card and leaves other cards unchanged', () => {
    const projeto = component.getProjetoEspecificacao()!;
    const card = projeto.accordionCards[0];
    const initialState = card.collapse;
    const otherCard = projeto.accordionCards[1];
    const otherInitialState = otherCard?.collapse;

    component.changeCollapse(card.id);
    expect(card.collapse).toBe(initialState === Collapse.NOT_COLLAPSED ? Collapse.COLLAPSED : Collapse.NOT_COLLAPSED);
    expect(otherCard?.collapse).toBe(otherInitialState);
  });

  it('navigates back to the project list and unsubscribes on destroy', () => {
    component.getBack();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/projeto');

    const subscription = (component as unknown as { routerSubscription: { closed: boolean } }).routerSubscription;
    fixture.destroy();
    expect(subscription.closed).toBe(true);
  });
});
