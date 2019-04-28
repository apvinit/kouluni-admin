import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Notice } from 'app/model/notice';
import { Student } from 'app/model/student';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  noticesCollection: AngularFirestoreCollection<Notice>;
  studentsCollection: AngularFirestoreCollection<Student>;

  constructor(private firestoreRef: AngularFirestore) {
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
      })
      .catch(() => {
        created.next('false');
      });
    return created;
  }

  getStudents(): Observable<Student[]> {
    return this.firestoreRef.collection<Student>('students').valueChanges();
  }

  deleteStudent(studentId) {
    return this.firestoreRef
      .collection<Student>('students')
      .doc(studentId)
      .delete();
  }

  updateStudent(student) {
    return this.firestoreRef
      .collection<Student>('students')
      .doc(student.id)
      .update(student);
  }
}
