import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from '../../shared/top-nav/top-nav.component';
import { CourseService } from '../../services/course.service';

@Component({
    selector: 'app-add-course',
    standalone: true,
    imports: [FormsModule, RouterModule, TopNavComponent, CommonModule],
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddCourseComponent {
  course: string = '';
  author: string = '';
  imageUrl: string = '';
  price: number = 0;

  // Inject the CourseService
  constructor(private courseService: CourseService) {}

  onSubmit(courseform: any) {
    if (!courseform.valid) return;
    // Handle form submission
    const courseData = {
      bookname: this.course,
      author: this.author,
      price: this.price,
    };

    this.courseService.registerCourse(courseData).subscribe(
      (response) => {},
      (error: any) => {
        console.error('Error registering course:', error);
        alert('Saving course failed');
      }
    );

    console.log('Course Submitted!');
    // Reset the form after submission
    courseform.reset();
  }
}
