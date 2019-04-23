import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { NewAdmissionComponent } from './new-admission/new-admission.component';

@NgModule({
  imports: [
    CommonModule,
    AdmissionRoutingModule
  ],
  declarations: [AdmissionComponent, StudentsListComponent, NewAdmissionComponent]
})
export class AdmissionModule { }
