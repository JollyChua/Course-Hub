import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  private registerCourseUrl = 'http://localhost:8080/books';  // Replace with your backend API URL
  private showCoursesUrl = 'http://localhost:8080/book'; 

  constructor(private http: HttpClient) {
  }
 
  registerCourse(courseData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.registerCourseUrl, courseData, { headers });
  }

  showCourses(): Observable<any> {
    return this.http.get(this.showCoursesUrl);
  }



}
