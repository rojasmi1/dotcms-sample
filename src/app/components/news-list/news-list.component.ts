import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import News from '../../model/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsList : News[];
  selectedNews : News;
  selectedId : string;

  constructor(
    private newsService:NewsService,
    private route:ActivatedRoute) { 

  }

  getNewsList() {
    this.newsService.getNewsList()
      .subscribe(newsList => {
        const id = this.route.snapshot.paramMap.get('id');
        
        // When the list is rendered for the first time first element in the list is selected
        if (!id && newsList.length) {
          const firstId = newsList[0].identifier;
          this.selectNewsDetails(firstId);
          this.selectNewsId(firstId);
        } else {
          this.selectNewsId(id);
        }
        this.newsList = newsList;
      });
  }

  ngOnInit() {
    this.getNewsList();
  }

  selectNewsDetails(id:string) {
      this.newsService.getNews(id)
        .subscribe(news => this.selectedNews = news[0]);
  }

  selectNewsId(id:string) {
      this.selectedId = id;
  }

}
