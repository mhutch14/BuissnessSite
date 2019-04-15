import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyDecisionPointsComponent } from './key-decision-points.component';

describe('KeyDecisionPointsComponent', () => {
  let component: KeyDecisionPointsComponent;
  let fixture: ComponentFixture<KeyDecisionPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyDecisionPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyDecisionPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
