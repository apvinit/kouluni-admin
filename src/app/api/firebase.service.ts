import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Notice } from 'app/model/notice';
import { Student } from 'app/model/student';
import { Observable, of, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  noticesCollection: AngularFirestoreCollection<Notice>;
  studentsCollection: AngularFirestoreCollection<Student>;

  constructor(
    private firestoreRef: AngularFirestore,
    private snackBar: MatSnackBar
  ) {
    this.noticesCollection = this.firestoreRef.collection<Notice>('notices');
    this.studentsCollection = this.firestoreRef.collection<Student>('students');
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
        created.next('true');
        this.snackBar.open('Added Successfully');
      })
      .catch(() => {
        created.next('false');
        this.snackBar.open('Error Adding Student', '', {
          duration: 3000
        });
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
        this.snackBar.open('Delete Successful', '', {
          duration: 3000
        });
      })
      .catch(err => {
        this.snackBar.open('Error Deleting Student', '', {
          duration: 3000
        });
      });
  }

  updateStudent(student) {
    this.studentsCollection
      .doc(student.id)
      .update(student)
      .then(() => {
        this.snackBar.open('Update Successful', '', {
          duration: 3000
        });
      })
      .catch(err => {
        this.snackBar.open('Error Updating Student', '', {
          duration: 3000
        });
      });
  }
}
