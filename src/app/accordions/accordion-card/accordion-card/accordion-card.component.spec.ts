import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCardComponent } from './accordion-card.component';

describe('AccordionCardComponent', () => {
  let component: AccordionCardComponent;
  let fixture: ComponentFixture<AccordionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
