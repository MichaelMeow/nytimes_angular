import { Injectable } from '@angular/core';
import { Article } from './models/article.model'
import { ARTICLES } from './MOCK-articles'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  getArticles() {
    return ARTICLES;
  }

  getByNewsDesk(subject: string) {
    console.log(subject);
    return this.http.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${environment.apiKey}&fq=news_desk:(${subject})&fq=source:("The New York Times")&sort=newest&fl=headline, news_desk&page=0`);


  }

}
