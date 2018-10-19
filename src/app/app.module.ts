import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuickNewsComponent } from './quick-news/quick-news.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { QuickNewsBlockComponent } from './quick-news-block/quick-news-block.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NavBarComponent,
    QuickNewsComponent,
    MainBodyComponent,
    QuickNewsBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
