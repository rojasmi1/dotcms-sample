import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import News from '../../model/news';
import { NewsService } from '../../services/news.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  @Input() news: News;
  imageApiURL : string = environment.baseImageApiURL;
  
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {
    // Subscribe to the params observable so each time the URL changes the news details get update
    this.route.params
      .forEach(params => this.getNews());
   }

  ngOnInit() {
  }

  getNews(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.newsService.getNews(id)
        .subscribe(news => this.news = news[0]);
    }
  }

}
