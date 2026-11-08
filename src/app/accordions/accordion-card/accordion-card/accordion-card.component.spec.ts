import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCardComponent } from './accordion-card.component';
import { AccordionProjetoCard, Collapse } from '../../../comuns/class/accordion-card';

describe('AccordionCardComponent', () => {
  let component: AccordionCardComponent;
  let fixture: ComponentFixture<AccordionCardComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
    imports: [AccordionCardComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionCardComponent);
    component = fixture.componentInstance;
    component.ehAccordionProjetoCard = true;
    component.accordionCard = new AccordionProjetoCard(1, 'Título', 'Descrição', Collapse.COLLAPSED, [], []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
