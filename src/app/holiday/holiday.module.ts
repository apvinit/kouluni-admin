import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayRoutingModule } from './holiday-routing.module';
import { HolidayComponent } from './holiday.component';
import { MaterialModule } from 'app/material.module';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { AddEditHolidayComponent } from './add-edit-holiday/add-edit-holiday.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HolidayComponent, HolidayListComponent, AddEditHolidayComponent],
  imports: [
    CommonModule,
    HolidayRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HolidayModule { }
