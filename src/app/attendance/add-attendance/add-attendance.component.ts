import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.scss']
})
export class AddAttendanceComponent implements OnInit {
  classes = [
    { name: 'Nursery', value: 'nursery' },
    { name: 'KG - 1', value: 'kg1' },
    { name: 'KG - 2', value: 'kg2' },
    { name: 'Class 1', value: '1' },
    { name: 'Class 2', value: '2' },
    { name: 'Class 3', value: '3' },
    { name: 'Class 4', value: '4' },
    { name: 'Class 5', value: '5' },
    { name: 'Class 6', value: '6' },
    { name: 'Class 7', value: '7' },
    { name: 'Class 8', value: '8' },
    { name: 'Class 9', value: '9' },
    { name: 'Class 10', value: '10' },
    { name: 'Class 11', value: '11' },
    { name: 'Class 12', value: '12' }
  ];

  sections = [
    { name: 'Section A', value: 'A' },
    { name: 'Section B', value: 'B' },
    { name: 'Section C', value: 'C' },
    { name: 'Section D', value: 'D' }
  ];

  attendanceForm = new FormGroup({});
  update = false;

  @ViewChild('attendanceFormTemplate') attendanceFormTemplate;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // to do
  }
}
