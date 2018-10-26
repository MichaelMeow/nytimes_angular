import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ArticleService } from '../article.service'

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
  providers: [ ArticleService ]
})
export class ArticleFormComponent implements OnInit {
  articles = null;

  constructor(private APIArticles: ArticleService) { }

  getArticles( subject: string ){
    this.APIArticles.getByNewsDesk(subject).subscribe(response => {
      this.articles = response.json();
      console.log(subject);
    })
  }

  ngOnInit() {
  }

}
