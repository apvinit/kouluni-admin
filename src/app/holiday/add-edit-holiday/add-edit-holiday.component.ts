import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from 'app/api/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Holiday } from 'app/model/holiday';

@Component({
  selector: 'app-add-edit-holiday',
  templateUrl: './add-edit-holiday.component.html',
  styleUrls: ['./add-edit-holiday.component.scss']
})
export class AddEditHolidayComponent implements OnInit {
  holidayForm = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    description: new FormControl('')
  });
  update = false;
  holidayId = '';

  @ViewChild('holidayFormTemplate') holidayFormTemplate;

  constructor(
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.holidayId = this.route.snapshot.paramMap.get('id');
    if (this.holidayId !== null) {
      this.update = true;
      this.firebaseService.getHolidayById(this.holidayId).subscribe(holiday => {
        this.holidayForm.setValue({
          name: holiday.name,
          date: holiday.date,
          description: holiday.description
        });
      });
    }
  }

  onSubmit() {
    const holiday: Holiday = this.holidayForm.value;
    if (this.update) {
      holiday.id = this.holidayId;
      this.firebaseService.updateHoliday(holiday);
      this.router.navigate(['../..'], { relativeTo: this.route });
    } else {
      this.firebaseService.addHoliday(holiday);
      this.resetForm();
    }
  }

  resetForm() {
    this.holidayForm.reset();
    this.holidayFormTemplate.resetForm();
  }

  goToHolidays() {
    this.router.navigate(['/holiday']);
  }
}
