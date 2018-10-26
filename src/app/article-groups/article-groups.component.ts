import { Component, Input,  OnInit } from '@angular/core';
import { Article } from '../models/article.model'
import { ARTICLES } from '../MOCK-articles'
import { ArticleService } from '../article.service'

@Component({
  selector: 'app-article-groups',
  templateUrl: './article-groups.component.html',
  styleUrls: ['./article-groups.component.scss'],
  providers: [ArticleService]
})
export class ArticleGroupsComponent implements OnInit {

  @Input() i: string[];
  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

}
