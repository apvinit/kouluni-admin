import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'app/api/firebase.service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.scss']
})
export class AddNoticeComponent implements OnInit {

  noticeForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  update = false;
  noticeId = '';

  @ViewChild('noticeFormTemplate') noticeFormTemplate;

  constructor(
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.noticeId = this.route.snapshot.paramMap.get('id');
    if (this.noticeId !== null) {
      this.update = true;
      this.firebaseService.getNoticeById(this.noticeId).subscribe(notice => {
        this.noticeForm.setValue({
          title: notice.title,
          description: notice.description
        });
      });
    }
  }

  onSubmit() {
    const notice = this.noticeForm.value;
    if (this.update) {
      notice.id = this.noticeId;
      this.firebaseService.updateNotice(notice);
      this.router.navigate(['../..'], { relativeTo: this.route });
    } else {
      this.firebaseService.addNotice(notice);
      this.resetForm();
    }
  }

  resetForm() {
    this.noticeForm.reset();
    this.noticeFormTemplate.resetForm();
  }

  goToNotices() {
    this.router.navigate(['/notice']);
  }
}
