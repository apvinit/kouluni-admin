import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayRoutingModule } from './holiday-routing.module';
import { HolidayComponent } from './holiday.component';
import { MaterialModule } from 'app/material.module';

@NgModule({
  declarations: [HolidayComponent],
  imports: [
    CommonModule,
    HolidayRoutingModule,
    MaterialModule
  ]
})
export class HolidayModule { }
