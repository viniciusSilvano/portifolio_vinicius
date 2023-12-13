import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardTecnologiaComponent } from './custom-card-tecnologia.component';

describe('CustomCardTecnologiaComponent', () => {
  let component: CustomCardTecnologiaComponent;
  let fixture: ComponentFixture<CustomCardTecnologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCardTecnologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCardTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
