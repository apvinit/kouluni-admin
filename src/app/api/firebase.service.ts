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
        created.next('true');
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

  addHoliday(holiday: Holiday) {
    // persist holiday document with id
    const id = this.firestoreRef.createId();
    holiday.id = id;
    this.holidaysCollection
      .doc(id)
      .set(holiday)
      .then(() => {
        this.showSnackbar('Added Successfully');
      })
      .catch(err => {
        this.showSnackbar('Error Adding Holiday');
      });
  }

  getHolidays(): Observable<Holiday[]> {
    return this.holidaysCollection.valueChanges();
  }

  getHolidayById(holidayId: string): Observable<Holiday> {
    return this.holidaysCollection.doc<Holiday>(holidayId).valueChanges();
  }

  deleteHoliday(holidayId: string) {
    this.holidaysCollection
      .doc(holidayId)
      .delete()
      .then(() => {
        this.showSnackbar('Delete Successful');
      })
      .catch(err => {
        this.showSnackbar('Error Deleting Holiday');
      });
  }

  updateHoliday(holiday: Holiday) {
    this.holidaysCollection
      .doc(holiday.id)
      .update(holiday)
      .then(() => {
        this.showSnackbar('Update Successful');
      })
      .catch(err => {
        this.showSnackbar('Error Updating Holiday');
      });
  }

  // Notices

  addNotice(notice: Notice) {
    // persist notice document with id
    const id = this.firestoreRef.createId();
    notice.id = id;
    this.holidaysCollection
      .doc(id)
      .set(notice)
      .then(() => {
        this.showSnackbar('Added Successfully');
      })
      .catch(err => {
        this.showSnackbar('Error Adding Notice');
      });
  }

  getNotices(): Observable<Notice[]> {
    return this.noticesCollection.valueChanges();
  }

  getNoticeById(id: string): Observable<Notice> {
    return this.noticesCollection.doc<Notice>(id).valueChanges();
  }

  deleteNotice(id: string) {
    this.noticesCollection
      .doc(id)
      .delete()
      .then(() => {
        this.showSnackbar('Delete Successful');
      })
      .catch(err => {
        this.showSnackbar('Error Deleting Notice');
      });
  }

  updateNotice(notice: Notice) {
    this.noticesCollection
      .doc(notice.id)
      .update(notice)
      .then(() => {
        this.showSnackbar('Update Successful');
      })
      .catch(err => {
        this.showSnackbar('Error Updating Notice');
      });
  }


  // utility functions
  showSnackbar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }
}
