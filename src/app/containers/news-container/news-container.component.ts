import { Component, OnInit } from '@angular/core';

import News from '../../model/news';
import { StateManagerService } from '../../services/state-manager.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.scss']
})
export class NewsContainerComponent implements OnInit {

  selectedNews:News;

  constructor(private stateManagerService:StateManagerService) { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.selectedNews = $event;
  }

}
