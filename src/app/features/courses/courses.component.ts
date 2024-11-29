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
        console.log('All courses:', response);
        this.courses = response; // Assuming the API returns an array of courses
      },
      (error: any) => {
        console.error('Error fetching all courses:', error);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {

    data: {  }  // Pass data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
