import { Component, Input, OnInit } from '@angular/core';
import { QuickNews } from '../models/quick-news.model'
import { QUICKNEWSBLOCKS } from '../MOCK-quick-news'

@Component({
  selector: 'app-quick-news',
  templateUrl: './quick-news.component.html',
  styleUrls: ['./quick-news.component.scss']
})
export class QuickNewsComponent implements OnInit {

  quicknewsblocks: QuickNews[] = QUICKNEWSBLOCKS;
  
  constructor() { }

  ngOnInit() {
  }

}
