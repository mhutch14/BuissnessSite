import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeperationAnxietyComponent } from './seperation-anxiety.component';

describe('SeperationAnxietyComponent', () => {
  let component: SeperationAnxietyComponent;
  let fixture: ComponentFixture<SeperationAnxietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeperationAnxietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeperationAnxietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
