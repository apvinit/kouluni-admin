import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableOptionsComponent } from './timetable-options.component';

describe('TimetableOptionsComponent', () => {
  let component: TimetableOptionsComponent;
  let fixture: ComponentFixture<TimetableOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
