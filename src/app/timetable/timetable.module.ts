import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableComponent } from './timetable.component';
import { TimetableStatusComponent } from './timetable-status/timetable-status.component';
import { TimetableOptionsComponent } from './timetable-options/timetable-options.component';
import { MaterialModule } from 'app/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TimetableRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    TimetableComponent,
    TimetableStatusComponent,
    TimetableOptionsComponent
  ]
})
export class TimetableModule {}
