import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAsideColumnComponent } from './right-aside-column.component';

describe('RightAsideColumnComponent', () => {
  let component: RightAsideColumnComponent;
  let fixture: ComponentFixture<RightAsideColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightAsideColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightAsideColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
