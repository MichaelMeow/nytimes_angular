import { Component, OnInit } from '@angular/core';
import { Editorial } from '../models/editorial.model'
import { EDITORIALS } from '../MOCK-editorials'

@Component({
  selector: 'app-main-editorials',
  templateUrl: './main-editorials.component.html',
  styleUrls: ['./main-editorials.component.scss']
})
export class MainEditorialsComponent implements OnInit {

  editorials: Editorial[] = EDITORIALS;

  constructor() { }

  ngOnInit() {
  }

}
