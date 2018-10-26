import { Injectable } from '@angular/core';
import { Article } from './models/article.model'
import { ARTICLES } from './MOCK-articles'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { nytKey } from './api-keys';

@Injectable()
export class ArticleService {

  constructor(private http: Http) {
  }

  getArticles() {
    return this.articles;
  }

  articles: Article[] = ARTICLES;

  getByNewsDesk(subject: string) {
    return  this.http.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nytKey}&fq=news_desk:(${subject})&fq=source:("The New York Times")&sort=newest&fl=headline, news_desk,snippet,multimedia,pub_date&page=0`);
  }

  saveArticlesByNewsDesk(subject: string) {
    return this.http.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nytKey}&fq=news_desk:(${subject})&fq=source:("The New York Times")&sort=newest&fl=headline, news_desk,snippet,multimedia,pub_date&page=0`)
    .subscribe(response => {
      let foundArticle: Article;
      for(let article of response.json().response.docs) {
        foundArticle = new Article(article.headline.main, article.snippet,'','',article.multimedia[0].url,article.multimedia[0].caption, article.multimedia[0].credit, '', article.pub_date, article.news_desk);
        this.articles.push(foundArticle)
      }
      console.log(ARTICLES)
    });
  }

}
