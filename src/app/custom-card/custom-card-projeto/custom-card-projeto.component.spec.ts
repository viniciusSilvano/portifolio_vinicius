import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardProjetoComponent } from './custom-card-projeto.component';

describe('CustomCardComponent', () => {
  let component: CustomCardProjetoComponent;
  let fixture: ComponentFixture<CustomCardProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCardProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCardProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
