import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosEspecificacaoComponent } from './projetos-especificacao.component';

describe('ProjetosEspecificacaoComponent', () => {
  let component: ProjetosEspecificacaoComponent;
  let fixture: ComponentFixture<ProjetosEspecificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosEspecificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosEspecificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
