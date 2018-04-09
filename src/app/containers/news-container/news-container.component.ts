import { Component, OnInit } from '@angular/core';

import News from '../../model/news';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.scss']
})
export class NewsContainerComponent implements OnInit {

  selectedNews:News;

  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.selectedNews = $event;
  }

}
