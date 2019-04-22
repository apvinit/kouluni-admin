import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/admission', title: 'Admission', icon: 'people', class: '' },
  {
    path: '/attendance',
    title: 'Attendance',
    icon: 'date_range',
    class: ''
  },
  {
    path: '/timetable',
    title: 'Timetable',
    icon: 'watch_later',
    class: ''
  },
  {
    path: '/notice',
    title: 'Notice',
    icon: 'notifications',
    class: ''
  },
  {
    path: '/events',
    title: 'Events',
    icon: 'events',
    class: ''
  },
  {
    path: '/fees',
    title: 'Fee Collection',
    icon: 'money',
    class: ''
  },
  {
    path: '/upgrade',
    title: 'Upgrade to PRO',
    icon: 'unarchive',
    class: 'active-pro'
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
