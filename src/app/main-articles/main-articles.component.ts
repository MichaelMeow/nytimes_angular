import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model'
import { ARTICLES } from '../MOCK-articles'

@Component({
  selector: 'app-main-articles',
  templateUrl: './main-articles.component.html',
  styleUrls: ['./main-articles.component.scss']
})
export class MainArticlesComponent implements OnInit {

  articles: Article[] = ARTICLES;

  constructor() { }

  ngOnInit() {
  }

}
