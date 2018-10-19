import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  dayNames: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  today = new Date();
  dayOfMonth = this.today.getDate();
  dayOfWeek = this.dayNames[this.today.getDay()];
  month = this.monthNames[this.today.getMonth()];
  year = this.today.getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
