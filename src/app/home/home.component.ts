import { Component, inject } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../book';
import { BookShelfingService } from '../book-shelfing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [BookCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  booksArray: Book[] = [];
  bookShelfService: BookShelfingService = inject(BookShelfingService);

  constructor() {
    this.booksArray = this.bookShelfService.getAllBooks();
  }
}
