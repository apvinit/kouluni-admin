import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'admission',
    loadChildren: '../../admission/admission.module#AdmissionModule'
  },
  {
    path: 'notice',
    loadChildren: '../../notice/notice.module#NoticeModule'
  },
  {
    path: 'attendance',
    loadChildren: '../../attendance/attendance.module#AttendanceModule'
  },
  {
    path: 'timetable',
    loadChildren: '../../timetable/timetable.module#TimetableModule'
  }
];
