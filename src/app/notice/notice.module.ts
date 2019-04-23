import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeComponent } from './notice.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { NoticeListComponent } from './notice-list/notice-list.component';

@NgModule({
  imports: [
    CommonModule,
    NoticeRoutingModule
  ],
  declarations: [NoticeComponent, AddNoticeComponent, NoticeListComponent]
})
export class NoticeModule { }
