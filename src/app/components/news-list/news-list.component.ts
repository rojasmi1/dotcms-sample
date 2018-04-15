import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  startOfToday,
  endOfToday,
  startOfYesterday,
  endOfYesterday,
  format,
  subDays,
  startOfWeek,
  endOfWeek
} from 'date-fns';

import News from '../../model/news';
import { NewsService } from '../../services/news.service';
import { StateManagerService } from '../../services/state-manager.service';
import { environment } from '../../../environments/environment';
const DATE_FORMAT: string = 'YYYYMMDDHHmmss';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsList: News[];
  selectedId: string;
  imageApiURL: string = environment.baseImageApiURL;
  @Output() messageEvent = new EventEmitter<News>();

  constructor(
    private newsService: NewsService,
    private stateManagerService: StateManagerService,
    private route: ActivatedRoute) {

  }

  getNewsList() {
    this.newsService.getNewsList()
      .subscribe(newsList => {
        this.newsList = newsList;
        this.checkForDefaultNews();
      });
  }

  getNewsListFiltered(from: string, to: string) {
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

  selectNewsDetails(id: string) {
    if (id) {

      this.newsService.getNews(id)
        .subscribe(news => {
          this.messageEvent.emit(news[0]);
        });
    } else {
      this.messageEvent.emit(null);
    }
  }

  selectNewsId(id: string) {
    this.selectedId = id;
  }

  changeFilter(filter) {
    const today: Date = new Date();

    switch (filter) {
      case 'all':
        this.getNewsList();
        break;
      case 'today':
        const todayStart = format(startOfToday(), DATE_FORMAT);
        const todayEnd = format(endOfToday(), DATE_FORMAT);
        this.getNewsListFiltered(todayStart, todayEnd);
        break;
      case 'yesterday':
        const yesterdayStart = format(startOfYesterday(), DATE_FORMAT);
        const yesterdayEnd = format(endOfYesterday(), DATE_FORMAT);
        this.getNewsListFiltered(yesterdayStart, yesterdayEnd);
        break;
      case 'lastweek':
        const lastWeekDay: Date = subDays(today, 7);
        const lastWeekStart = format(startOfWeek(lastWeekDay), DATE_FORMAT);
        const lastWeekEnd = format(endOfWeek(lastWeekDay), DATE_FORMAT);
        this.getNewsListFiltered(lastWeekStart, lastWeekEnd);
        break;
    }
  }

  /**
   * Check if no news id is present in the URL params, if no then select the first element
   */
  private checkForDefaultNews() {
    const id = this.route.snapshot.paramMap.get('id');
    this.selectNewsDetails(null);
    this.selectNewsId(null);

    // When the list is rendered for the first time first element in the list is selected
    if (!id && this.newsList.length) {
      const firstId = this.newsList[0].identifier;
      if (firstId)
        this.selectNewsDetails(firstId);
      this.selectNewsId(firstId);
    } else {
      this.selectNewsId(id);
    }
  }

}
