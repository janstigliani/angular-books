import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';


@Component({
  selector: 'app-book-card',
  imports: [CommonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input() bookElement!: Book;
}
