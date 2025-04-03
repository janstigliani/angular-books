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
  filteredBookList: Book[] = [];

  constructor() {
    this.booksArray = this.bookShelfService.getAllBooks();
    this.filteredBookList = this.booksArray;
  }
  
  filterResults(text: string) {
    if (!text) {
      this.filteredBookList = this.booksArray;
      console.log("i'm in")
      return;
    }

    this.filteredBookList = this.booksArray.filter((book) => 
      book?.title.toLowerCase().includes(text.toLowerCase())
    );
  }
}
