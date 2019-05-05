import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { AttendanceStatusComponent } from './attendance-status/attendance-status.component';

const routes: Routes = [
  {
    path: '',
    component: AttendanceComponent,
    children: [
      {
        path: 'add',
        component: AddAttendanceComponent
      },
      {
        path: 'status',
        component: AttendanceStatusComponent
      },
      {
        path: '',
        redirectTo: 'add',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule {}
