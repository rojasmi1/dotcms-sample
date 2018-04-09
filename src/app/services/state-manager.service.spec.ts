import { TestBed, inject } from '@angular/core/testing';

import { StateManagerService } from './state-manager.service';

describe('StateManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateManagerService]
    });
  });

  it('should be created', inject([StateManagerService], (service: StateManagerService) => {
    expect(service).toBeTruthy();
  }));
});
