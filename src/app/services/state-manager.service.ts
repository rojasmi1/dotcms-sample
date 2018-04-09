import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StateManagerService {
  
  private messageSource = new BehaviorSubject<string>("all");
  currentFilter = this.messageSource.asObservable();

  constructor() { }

  changeFilterSelection(filter: string) {
    this.messageSource.next(filter);
  }

}
