import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model'
import { ARTICLES } from '../MOCK-articles'
import { Editorial } from '../models/editorial.model'
import { EDITORIALS } from '../MOCK-editorials'

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  articles: Article[] = ARTICLES;
  editorials: Editorial[] = EDITORIALS;

  constructor() { }

  ngOnInit() {
  }

}
