import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { AttendanceStatusComponent } from './attendance-status/attendance-status.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';

@NgModule({
  imports: [
    CommonModule,
    AttendanceRoutingModule
  ],
  declarations: [AttendanceComponent, AttendanceStatusComponent, AddAttendanceComponent]
})
export class AttendanceModule { }
