import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookShelfingService } from '../../services/book-shelfing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-book',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
  route: ActivatedRoute = inject(ActivatedRoute); 
  bookService= inject(BookShelfingService);   
  applyForm = new FormGroup({ 
    title: new FormControl(''), 
    imagejpeg: new FormControl(''), 
    summaries: new FormControl(''),
  });

  submitApplication() {
    this.bookService.submitApplication(this.applyForm.value.title ?? '', this.applyForm.value.imagejpeg ?? '', Array.isArray(this.applyForm.value.summaries) ? this.applyForm.value.summaries : [],);
  }
}


