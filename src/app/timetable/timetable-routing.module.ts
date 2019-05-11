import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimetableComponent } from './timetable.component';
import { TimetableStatusComponent } from './timetable-status/timetable-status.component';
import { AddEditTimetableComponent } from './add-edit-timetable/add-edit-timetable.component';

const routes: Routes = [
  {
    path: '',
    component: TimetableComponent,
    children: [
      {
        path: 'status',
        component: TimetableStatusComponent
      },
      {
        path: 'new',
        component: AddEditTimetableComponent
      },
      {
        path: '',
        redirectTo: 'status',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetableRoutingModule {}
