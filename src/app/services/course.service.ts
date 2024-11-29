import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8080';  // Base URL for convenience
  private registerCourseUrl = `${this.baseUrl}/books`; // Endpoint to register a course
  private showCoursesUrl = `${this.baseUrl}/book`; // Endpoint to get all courses
  private deleteCourseUrl = `${this.baseUrl}/book`; // Endpoint to delete a course

  constructor(private http: HttpClient) {
  }
 
  registerCourse(courseData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.registerCourseUrl, courseData, { headers });
  }

  showCourses(): Observable<any> {
    return this.http.get(this.showCoursesUrl);
  }

  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete(`${this.showCoursesUrl}/${courseId}`);
  }
 
}
