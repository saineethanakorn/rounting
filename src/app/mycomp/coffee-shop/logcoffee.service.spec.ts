import { TestBed } from '@angular/core/testing';

import { LogcoffeeService } from './logcoffee.service';

describe('LogcoffeeService', () => {
  let service: LogcoffeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogcoffeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
