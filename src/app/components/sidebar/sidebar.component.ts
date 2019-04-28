import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  links = [
    { url: '', title: 'Home'},
    { url: '/dashboard', title: 'Dashboard'},
    { url: '/admission', title: 'Admission'},
    { url: '/attendance', title: 'Attendance'},
    { url: '/timetable', title: 'Timetable'},
    { url: '/notice', title: 'Notice'},
    { url: '/events', title: 'Events'},
    { url: '/holiday', title: 'Holidays'},
  ];

  constructor() {}

  ngOnInit() {}
}
