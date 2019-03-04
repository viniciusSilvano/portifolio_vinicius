import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosCarouselImagensComponent } from './projetos-carousel-imagens.component';

describe('ProjetosCarouselImagensComponent', () => {
  let component: ProjetosCarouselImagensComponent;
  let fixture: ComponentFixture<ProjetosCarouselImagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosCarouselImagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosCarouselImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
