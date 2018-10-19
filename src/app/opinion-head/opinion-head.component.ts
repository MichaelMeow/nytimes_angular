import { Component, Input, OnInit } from '@angular/core';
import { Editorial } from '../models/editorial.model'

@Component({
  selector: 'app-opinion-head',
  templateUrl: './opinion-head.component.html',
  styleUrls: ['./opinion-head.component.scss']
})
export class OpinionHeadComponent implements OnInit {

  @Input() editorial: Editorial;

  constructor() { }

  ngOnInit() {
  }

}
