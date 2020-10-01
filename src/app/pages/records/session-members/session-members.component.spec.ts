import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionMembersComponent } from './session-members.component';

describe('SessionMembersComponent', () => {
  let component: SessionMembersComponent;
  let fixture: ComponentFixture<SessionMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
