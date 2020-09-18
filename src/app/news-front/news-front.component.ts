import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-api.service';


@Component({
  selector: 'app-news-front',
  templateUrl: './news-front.component.html',
  styleUrls: ['./news-front.component.css']
})
export class NewsFrontComponent {

  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');
  }

  ngOnInit() {
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);
  }
  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
