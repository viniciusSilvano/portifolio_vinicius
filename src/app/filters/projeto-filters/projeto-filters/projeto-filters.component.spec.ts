import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoFiltersComponent } from './projeto-filters.component';

describe('ProjetoFiltersComponent', () => {
  let component: ProjetoFiltersComponent;
  let fixture: ComponentFixture<ProjetoFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
