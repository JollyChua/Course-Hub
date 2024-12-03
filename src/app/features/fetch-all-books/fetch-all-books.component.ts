import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { BookCardComponent } from '../../shared/book-card/book-card.component';
import { TopNavComponent } from '../../shared/top-nav/top-nav.component';

@Component({
  selector: 'app-fetch-all-books',
  standalone: true,
  imports: [ RouterModule, BookCardComponent, TopNavComponent ],
  templateUrl: './fetch-all-books.component.html',
  styleUrl: './fetch-all-books.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] // Add this line
})
export class FetchAllBooksComponent {

}
