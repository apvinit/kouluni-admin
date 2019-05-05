import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeComponent } from './notice.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { NoticeListComponent } from './notice-list/notice-list.component';

const routes: Routes = [
  {
    path: '',
    component: NoticeComponent,
    children: [
      {
        path: 'new',
        component: AddNoticeComponent
      },
      {
        path: 'edit/:id',
        component: AddNoticeComponent
      },
      {
        path: 'list',
        component: NoticeListComponent
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
export class NoticeRoutingModule {}
