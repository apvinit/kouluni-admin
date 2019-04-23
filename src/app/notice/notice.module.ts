import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeComponent } from './notice.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';

@NgModule({
  imports: [
    CommonModule,
    NoticeRoutingModule
  ],
  declarations: [NoticeComponent, AddNoticeComponent]
})
export class NoticeModule { }
