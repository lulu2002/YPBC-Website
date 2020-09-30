import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorExpComponent } from './senior-exp.component';

describe('SeniorExpComponent', () => {
  let component: SeniorExpComponent;
  let fixture: ComponentFixture<SeniorExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
