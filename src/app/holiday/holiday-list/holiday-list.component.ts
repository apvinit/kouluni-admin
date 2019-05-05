import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/api/firebase.service';
import { Observable } from 'rxjs';
import { Holiday } from 'app/model/holiday';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent implements OnInit {
  holidays$: Observable<Holiday[]>;
  columnsToDisplay = ['name', 'date', 'description', 'actions'];

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.holidays$ = this.firebaseService.getHolidays();
  }

  editHoliday(id: string) {
    this.router.navigate(['../edit', id], { relativeTo: this.route});

  }

  deleteHoliday(id: string) {
    this.firebaseService.deleteHoliday(id);
  }
}
