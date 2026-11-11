import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionFilterCardComponent } from './accordion-filter-card.component';

describe('AccordionFilterCardComponent', () => {
  let component: AccordionFilterCardComponent;
  let fixture: ComponentFixture<AccordionFilterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionFilterCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccordionFilterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
