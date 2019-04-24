import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableComponent } from './timetable.component';

@NgModule({
  imports: [
    CommonModule,
    TimetableRoutingModule
  ],
  declarations: [TimetableComponent]
})
export class TimetableModule { }
