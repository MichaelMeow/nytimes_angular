import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model'
import { ARTICLES } from '../MOCK-articles'

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  articles: Article[] = ARTICLES;

  constructor() { }

  ngOnInit() {
  }

}
