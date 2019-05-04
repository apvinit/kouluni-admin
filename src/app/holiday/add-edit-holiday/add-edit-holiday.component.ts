import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // todo for later
  }

}
