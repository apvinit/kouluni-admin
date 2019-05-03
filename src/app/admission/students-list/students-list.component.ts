import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from 'app/api/firebase.service';
import { Observable } from 'rxjs';
import { Student } from 'app/model/student';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: Observable<Student[]>;
  studentsDataSource: MatTableDataSource<Student>;

  columnsToDisplay = ['name', 'fatherName', 'class', 'section', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private firebaseService: FirebaseService,
    private rotuer: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.students = this.firebaseService.getStudents();
    this.students.subscribe(students => {
      this.studentsDataSource = new MatTableDataSource(students);
      this.studentsDataSource.paginator = this.paginator;
    });
  }

  editStudent(studentId) {
    this.rotuer.navigate(['./edit', studentId], { relativeTo: this.route});
  }

  deleteStudent(stduentId) {
    this.firebaseService.deleteStudent(stduentId);
  }
}
