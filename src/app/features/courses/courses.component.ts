import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TopNavComponent } from '../../shared/top-nav/top-nav.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [TopNavComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesComponent {

}
