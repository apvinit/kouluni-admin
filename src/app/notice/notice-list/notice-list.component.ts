import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Notice } from 'app/model/notice';
import { FirebaseService } from 'app/api/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit {
  notices$: Observable<Notice[]>;
  columnsToDisplay = ['title', 'description', 'actions'];

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.notices$ = this.firebaseService.getNotices();
  }

  editNotice(id: string) {
    this.router.navigate(['../edit', id], { relativeTo: this.route})
  }

  deleteNotice(id: string) {
    this.firebaseService.deleteNotice(id);
  }
}
