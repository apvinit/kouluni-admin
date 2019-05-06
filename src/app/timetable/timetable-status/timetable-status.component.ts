import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetable-status',
  templateUrl: './timetable-status.component.html',
  styleUrls: ['./timetable-status.component.scss']
})
export class TimetableStatusComponent implements OnInit {
  columnsToDisplay = ['day', 'startTime', 'endTime', 'subject', 'teacher'];

  timetables = [
    {
      day: 'monday',
      startTime: '07:00 am',
      endTime: '07:40 am',
      subject: 'Maths',
      teacher: 'Amitabh Bachhan'
    },
    {
      day: 'tuesday',
      startTime: '07:00 am',
      endTime: '07:40 am',
      subject: 'Maths',
      teacher: 'Amitabh Bachhan'
    },
    {
      day: 'wednesday',
      startTime: '07:00 am',
      endTime: '07:40 am',
      subject: 'Maths',
      teacher: 'Amitabh Bachhan'
    },
    {
      day: 'thursday',
      startTime: '07:00 am',
      endTime: '07:40 am',
      subject: 'Maths',
      teacher: 'Amitabh Bachhan'
    },
    {
      day: 'friday',
      startTime: '07:00 am',
      endTime: '07:40 am',
      subject: 'Maths',
      teacher: 'Amitabh Bachhan'
    },
    {
      day: 'saturday',
      startTime: '07:00 am',
      endTime: '07:40 am',
      subject: 'Maths',
      teacher: 'Amitabh Bachhan'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
