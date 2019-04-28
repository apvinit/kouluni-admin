import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/api/firebase.service';
import { Observable } from 'rxjs';
import { Student } from 'app/model/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: Observable<Student[]>;

  columnsToDisplay = ['name', 'fatherName', 'class', 'section', 'action']
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.students = this.firebaseService.getStudents();
  }

  editStudent(studentId) {
    // todo for later
  }

  deleteStudent(stduentId) {
   this.firebaseService.deleteStudent(stduentId);
  }
}
