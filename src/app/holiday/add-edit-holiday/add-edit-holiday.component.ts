import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from 'app/api/firebase.service';

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

  @ViewChild('holidayFormTemplate') holidayFormTemplate;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.firebaseService.addHoliday(this.holidayForm.value);
    this.resetForm();
  }

  resetForm() {
    this.holidayForm.reset();
    this.holidayFormTemplate.resetForm();
  }

}
