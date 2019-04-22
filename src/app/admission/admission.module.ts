import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';

@NgModule({
  imports: [
    CommonModule,
    AdmissionRoutingModule
  ],
  declarations: [AdmissionComponent]
})
export class AdmissionModule { }
