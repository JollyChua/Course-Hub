import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TopNavComponent } from '../../shared/top-nav/top-nav.component';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, TopNavComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesComponent implements OnInit{
  courses: { bookid: number; bookname: string; author: string; price: number }[] = [];
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }


  fetchCourses(): void {
    this.courseService.showCourses().subscribe(
      (response) => {
        console.log('All courses:', response);
        this.courses = response; // Assuming the API returns an array of courses
      },
      (error: any) => {
        console.error('Error fetching all courses:', error);
      }
    );
  }
}
