import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosExistentesComponent } from './projetos-existentes.component';

describe('ProjetosExistentesComponent', () => {
  let component: ProjetosExistentesComponent;
  let fixture: ComponentFixture<ProjetosExistentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosExistentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosExistentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
