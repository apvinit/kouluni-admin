import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from '../../model/student';
import { FirebaseService } from 'app/api/firebase.service';

@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.component.html',
  styleUrls: ['./new-admission.component.scss']
})
export class NewAdmissionComponent implements OnInit {
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
    { name: 'Section A', value: 'a' },
    { name: 'Section B', value: 'b' },
    { name: 'Section C', value: 'c' },
    { name: 'Section D', value: 'd' }
  ];

  studentForm = new FormGroup({
    name: new FormControl(''),
    fathername: new FormControl(''),
    mothername: new FormControl(''),
    dob: new FormControl(''),
    class: new FormControl('Choose a Class'),
    section: new FormControl('Choose a Section'),
    contactNo: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {}

  onSubmit() {
    const student: Student = this.studentForm.value;
    this.firebaseService.addStudent(student).subscribe(value => {
      if (value === 'true') {
        this.studentForm.reset();
      }
    });
  }
}
