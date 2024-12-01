import { NgModule } from '@angular/core';
import { HomeComponent } from './features/registration/home.component';
import { CoursesComponent } from './features/courses/courses.component';
import { AddCourseComponent } from './features/add-course/add-course.component';
import { FetchAllUsersComponent } from './features/fetch-all-users/fetch-all-users.component';
import { RouterModule, Routes } from '@angular/router'; 

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },  // Your target route
  { path: 'add-course', component: AddCourseComponent },
  { path: 'fetch-all-users', component: FetchAllUsersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }  // Wildcard route for 404
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
