import { Component, Input, OnInit } from '@angular/core';
import { QuickNews } from '../models/quick-news.model'

@Component({
  selector: 'app-quick-news-block',
  templateUrl: './quick-news-block.component.html',
  styleUrls: ['./quick-news-block.component.scss']
})
export class QuickNewsBlockComponent implements OnInit {

  @Input() quick: QuickNews;

  constructor() { }

  ngOnInit() {
  }

}
