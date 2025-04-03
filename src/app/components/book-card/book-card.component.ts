import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-book-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input() bookElement!: Book;
}
