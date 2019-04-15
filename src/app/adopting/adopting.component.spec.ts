import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptingComponent } from './adopting.component';

describe('AdoptingComponent', () => {
  let component: AdoptingComponent;
  let fixture: ComponentFixture<AdoptingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
