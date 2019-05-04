import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HolidayComponent } from './holiday.component';

const routes: Routes = [
  {
    path: '', component: HolidayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayRoutingModule { }
