import { Component, inject } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { CommonModule } from '@angular/common';
import { BookShelfingService } from '../../services/book-shelfing.service';
import { Book } from '../../models/book';

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
