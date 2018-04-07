import { Component, OnInit } from '@angular/core';
import News from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList : News[];

  constructor(private newsService:NewsService) { 

  }

  getNewsList() {
    this.newsService.getNewsList()
      .subscribe(newsList => this.newsList = newsList);
  }

  ngOnInit() {
    this.getNewsList();
  }

}
