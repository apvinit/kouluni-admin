import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HolidayComponent } from './holiday.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { AddEditHolidayComponent } from './add-edit-holiday/add-edit-holiday.component';

const routes: Routes = [
  {
    path: '',
    component: HolidayComponent,
    children: [
      {
        path: 'list',
        component: HolidayListComponent
      },
      {
        path: 'new',
        component: AddEditHolidayComponent
      },
      {
        path: 'edit/:id',
        component: AddEditHolidayComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayRoutingModule {}
