import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableComponent } from './timetable.component';
import { TimetableStatusComponent } from './timetable-status/timetable-status.component';
import { TimetableOptionsComponent } from './timetable-options/timetable-options.component';

@NgModule({
  imports: [
    CommonModule,
    TimetableRoutingModule
  ],
  declarations: [TimetableComponent, TimetableStatusComponent, TimetableOptionsComponent]
})
export class TimetableModule { }
