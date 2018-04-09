import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { startOfYesterday, endOfYesterday } from 'date-fns';

import News from '../../model/news';
import { NewsService } from '../../services/news.service';
import { StateManagerService } from '../../services/state-manager.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsList : News[];
  selectedId : string;
  imageApiURL : string = environment.baseImageApiURL;
  @Output() messageEvent = new EventEmitter<News>();

  constructor(
    private newsService:NewsService,
    private stateManagerService:StateManagerService,
    private route:ActivatedRoute) { 

  }

  getNewsList() {
    this.newsService.getNewsList()
      .subscribe(newsList => {
        this.newsList = newsList;
        this.checkForDefaultNews();
      });
  }

  getNewsListFiltered(from: Date, to: Date) {
    this.newsService.getNewsListByRange(from, to)
      .subscribe(newsList => {
        this.newsList = newsList;
        this.checkForDefaultNews();
      });
  }

  ngOnInit() {
    this.getNewsList();
    this.stateManagerService.currentFilter.subscribe(filter => this.changeFilter(filter));
  }

  selectNewsDetails(id:string) {
      this.newsService.getNews(id)
        .subscribe(news => {
          this.messageEvent.emit(news[0]);
        });
  }

  selectNewsId(id:string) {
      this.selectedId = id;
  }

  changeFilter(filter) {

    // TODO: Set the date ranges to call the service and filter the data
    switch (filter) {
      case 'yesterday': 
        const from: Date = startOfYesterday();
        const to: Date = endOfYesterday();
        // this.getNewsListFiltered(from, to);
    }
  }

  /**
   * Check if no news id is present in the URL params, if no then select the first element
   */
  private checkForDefaultNews() {
      const id = this.route.snapshot.paramMap.get('id');
      
      // When the list is rendered for the first time first element in the list is selected
      if (!id && this.newsList.length) {
        const firstId = this.newsList[0].identifier;
        this.selectNewsDetails(firstId);
        this.selectNewsId(firstId);
      } else {
        this.selectNewsId(id);
      }
  }

}
