import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionComponent } from './admission.component';
import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdmissionComponent,
    children: [
      {
        path: 'new',
        component: NewAdmissionComponent
      },
      {
        path: 'students',
        component: StudentsListComponent
      },
      {
        path: 'students/edit/:id',
        component: NewAdmissionComponent
      },
      {
        path: '',
        redirectTo: 'students',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule {}
