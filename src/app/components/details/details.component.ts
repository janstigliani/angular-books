import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { BookShelfingService } from '../../services/book-shelfing.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  bookservice = inject(BookShelfingService);
  bookElement: Book | undefined;

  constructor() {
    const bookElementId = Number(this.route.snapshot.params['id']);
    this.bookElement = this.bookservice.getBookById(bookElementId);
  }
}
