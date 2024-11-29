import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TopNavComponent } from '../../shared/top-nav/top-nav.component';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
    selector: 'app-courses',
    standalone: true,
    imports: [CommonModule, TopNavComponent, MatButtonModule,],
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoursesComponent implements OnInit{
  courses: { bookid: number; bookname: string; author: string; price: number }[] = [];
  constructor(private courseService: CourseService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.courseService.showCourses().subscribe(
      (response) => {

        this.courses = response; // Assuming the API returns an array of courses
      },
      (error: any) => {
        console.error('Error fetching all courses:', error);
      }
    );
  }

  deleteCourse(courseId: number): void {
    this.courseService.deleteCourse(courseId).subscribe(
      (response) => {
        this.fetchCourses(); // Refresh course list after deletion
      },
      (error: any) => {
        console.error('Error deleting course:', error);
      }
    );
  }

  openDialog(courseId: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { courseId },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteCourse(courseId); // Call your delete method
      } 
    });
  }
}
