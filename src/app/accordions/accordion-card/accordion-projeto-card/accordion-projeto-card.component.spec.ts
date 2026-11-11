import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionProjetoCardComponent } from './accordion-projeto-card.component';

describe('AccordionProjetoCardComponent', () => {
  let component: AccordionProjetoCardComponent;
  let fixture: ComponentFixture<AccordionProjetoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionProjetoCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccordionProjetoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
