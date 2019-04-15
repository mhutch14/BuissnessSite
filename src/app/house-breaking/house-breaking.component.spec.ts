import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseBreakingComponent } from './house-breaking.component';

describe('HouseBreakingComponent', () => {
  let component: HouseBreakingComponent;
  let fixture: ComponentFixture<HouseBreakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseBreakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseBreakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
