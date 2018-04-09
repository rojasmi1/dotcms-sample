import { Component, OnInit } from '@angular/core';

import { StateManagerService } from '../../services/state-manager.service';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent implements OnInit {

  constructor(private stateManagerService:StateManagerService) { }

  ngOnInit() {
  }

  filterChanged(filter) {
    this.stateManagerService.changeFilterSelection(filter);
  }

}
