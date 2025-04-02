import { Component } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../book';

@Component({
  selector: 'app-home',
  imports: [BookCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
}
