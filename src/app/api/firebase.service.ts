import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Notice } from 'app/model/notice';
import { Student } from 'app/model/student';
import { Observable, of, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Holiday } from 'app/model/holiday';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  noticesCollection: AngularFirestoreCollection<Notice>;
  studentsCollection: AngularFirestoreCollection<Student>;
  holidaysCollection: AngularFirestoreCollection<Holiday>;

  constructor(
    private firestoreRef: AngularFirestore,
    private snackBar: MatSnackBar
  ) {
    this.noticesCollection = this.firestoreRef.collection<Notice>('notices');
    this.studentsCollection = this.firestoreRef.collection<Student>('students');
    this.holidaysCollection = this.firestoreRef.collection<Holiday>('holidays');
  }

  // Admission

  /**
   * @param student
   */

  addStudent(student: Student) {
    // persist student document with id
    const id = this.firestoreRef.createId();
    student.id = id;
    const created = new Subject();
    this.studentsCollection
      .doc(id)
      .set(student)
      .then(() => {
        this.showSnackbar('Added Successfully');
      })
      .catch(() => {
        created.next('false');
        this.showSnackbar('Error Adding Student');
      });
    return created;
  }

  getStudents(): Observable<Student[]> {
    return this.studentsCollection.valueChanges();
  }

  getStudentById(studentId): Observable<Student> {
    return this.studentsCollection.doc<Student>(studentId).valueChanges();
  }

  deleteStudent(studentId) {
    this.firestoreRef
      .collection<Student>('students')
      .doc(studentId)
      .delete()
      .then(() => {
        this.showSnackbar('Delete Successful');
      })
      .catch(err => {
        this.showSnackbar('Error Deleting Student');
      });
  }

  updateStudent(student) {
    this.studentsCollection
      .doc(student.id)
      .update(student)
      .then(() => {
        this.showSnackbar('Update Successful');
      })
      .catch(err => {
        this.showSnackbar('Error Updating Student');
      });
  }

  // Holidays



  // utility functions
  showSnackbar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }
}
