import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule
  ],
  declarations: [EventComponent]
})
export class EventModule { }
