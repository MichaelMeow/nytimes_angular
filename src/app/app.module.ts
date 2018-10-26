import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuickNewsComponent } from './quick-news/quick-news.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { QuickNewsBlockComponent } from './quick-news-block/quick-news-block.component';
import { ArticleBlockComponent } from './article-block/article-block.component';
import { OpinionHeadComponent } from './opinion-head/opinion-head.component';
import { EditorialSubComponent } from './editorial-sub/editorial-sub.component';
import { MainArticlesComponent } from './main-articles/main-articles.component';
import { MainEditorialsComponent } from './main-editorials/main-editorials.component';
import { ArticleGroupsComponent } from './article-groups/article-groups.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NavBarComponent,
    QuickNewsComponent,
    MainBodyComponent,
    QuickNewsBlockComponent,
    ArticleBlockComponent,
    OpinionHeadComponent,
    EditorialSubComponent,
    MainArticlesComponent,
    MainEditorialsComponent,
    ArticleGroupsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
