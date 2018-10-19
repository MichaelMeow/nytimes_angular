import { Component, Input, OnInit } from '@angular/core';
import { Editorial } from '../models/editorial.model'

@Component({
  selector: 'app-editorial-sub',
  templateUrl: './editorial-sub.component.html',
  styleUrls: ['./editorial-sub.component.scss']
})
export class EditorialSubComponent implements OnInit {

  @Input() editorial: Editorial;

  constructor() { }

  ngOnInit() {
  }

}
