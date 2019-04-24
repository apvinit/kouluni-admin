import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableStatusComponent } from './timetable-status.component';

describe('TimetableStatusComponent', () => {
  let component: TimetableStatusComponent;
  let fixture: ComponentFixture<TimetableStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
