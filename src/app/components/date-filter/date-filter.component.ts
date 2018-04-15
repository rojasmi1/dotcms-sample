import { Component, OnInit } from '@angular/core';

import { StateManagerService } from '../../services/state-manager.service';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent implements OnInit {

  timeFilter : any [] = [
    {value: 'all', text: 'Filter by date'},
    {value: 'today', text: 'Today'},
    {value: 'yesterday', text: 'Yesterday'},
    {value: 'lastweek', text: 'Last Wekk'}
    ];
  selectedFilter : string = 'all';

  constructor(private stateManagerService:StateManagerService) { }

  ngOnInit() {
  }

  filterChanged() {
    this.stateManagerService.changeFilterSelection(this.selectedFilter);
  }

}
