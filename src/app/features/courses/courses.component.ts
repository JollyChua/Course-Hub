import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TopNavComponent } from '../../shared/top-nav/top-nav.component';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, TopNavComponent, ModalModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesComponent implements OnInit{
  courses: { bookid: number; bookname: string; author: string; price: number }[] = [];

  modalRef?: BsModalRef;
  message?: string;

   // Combine both services in a single constructor
   constructor(
    private courseService: CourseService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.fetchCourses();
  }


  fetchCourses(): void {
    this.courseService.showCourses().subscribe(
      (response) => {
        console.log('All courses:', response);
        this.courses = response;
      },
      (error: any) => {
        console.error('Error fetching all courses:', error);
      }
    );
  }


   // Open the modal
   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  // Confirm action
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef?.hide();
  }

  // Decline action
  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }
}
