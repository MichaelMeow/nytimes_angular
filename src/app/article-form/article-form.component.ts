import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ArticleService } from '../article.service'
import { ARTICLES } from '../MOCK-articles'

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
  providers: [ ArticleService ]
})
export class ArticleFormComponent implements OnInit {
  articles = ARTICLES;

  constructor(private APIArticles: ArticleService) { }

  getArticles( subject: string ){
    this.APIArticles.saveArticlesByNewsDesk(subject);
  }

  imageToggle (imageNumber: number, toggle: string){
    if (toggle == "hide"){
      this.articles[imageNumber].imageShow = false;
    }
    if (toggle == "show"){
      this.articles[imageNumber].imageShow = true;
    }
  }
  
  ngOnInit() {
    this.getArticles( "National" );
  }

}
