import { TestBed } from '@angular/core/testing';
import { BookShelfingService } from './book-shelfing.service';


describe('BookShelfingService', () => {
  let service: BookShelfingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookShelfingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
