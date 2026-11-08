import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftAsideColumnComponent } from './left-aside-column.component';

describe('LeftAsideColumnComponent', () => {
  let component: LeftAsideColumnComponent;
  let fixture: ComponentFixture<LeftAsideColumnComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
    imports: [LeftAsideColumnComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftAsideColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
