import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import News from '../../model/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList : News[];
  selectedNews : News;

  constructor(
    private newsService:NewsService,
    private route:ActivatedRoute) { 

  }

  getNewsList() {
    this.newsService.getNewsList()
      .subscribe(newsList => {
        this.newsList = newsList;
        const id = this.route.snapshot.paramMap.get('id');
        if (!id && this.newsList.length) {
          this.selectNews(this.newsList[0].identifier);
        }
      });
  }

  ngOnInit() {
    this.getNewsList();
  }

  selectNews(id:string) {
      this.newsService.getNews(id)
        .subscribe(news => this.selectedNews = news[0]);
  }

}
