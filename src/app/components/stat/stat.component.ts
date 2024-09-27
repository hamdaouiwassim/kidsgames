import { Component, OnInit } from '@angular/core';
import {
  faUser,
  faUserGraduate,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
})
export class StatComponent implements OnInit {
  totalParents = 1200; // Replace with dynamic data if needed
  totalStudents = 3500; // Replace with dynamic data if needed
  totalGames = 50; // Replace with dynamic data if needed

  faUser = faUser;
  faUserGraduate = faUserGraduate;
  faGamepad = faGamepad;

  constructor() {}

  ngOnInit(): void {}
}
