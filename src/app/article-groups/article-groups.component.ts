import { Component, Input,  OnInit } from '@angular/core';
import { Article } from '../models/article.model'
import { ARTICLES } from '../MOCK-articles'

@Component({
  selector: 'app-article-groups',
  templateUrl: './article-groups.component.html',
  styleUrls: ['./article-groups.component.scss']
})
export class ArticleGroupsComponent implements OnInit {

  @Input() i: string[];
  articles: Article[] = ARTICLES;

  constructor() { }

  ngOnInit() {
  }

}
