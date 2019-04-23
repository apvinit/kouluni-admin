import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';

@NgModule({
  imports: [
    CommonModule,
    AttendanceRoutingModule
  ],
  declarations: [AttendanceComponent]
})
export class AttendanceModule { }
