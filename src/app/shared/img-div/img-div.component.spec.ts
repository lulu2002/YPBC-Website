import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDivComponent } from './img-div.component';

describe('ImgDivComponent', () => {
  let component: ImgDivComponent;
  let fixture: ComponentFixture<ImgDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
