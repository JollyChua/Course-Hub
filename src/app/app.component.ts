import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, MatSlideToggleModule,  MatDialogModule,],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'courseHub';

  posts: any[] = [];
  newPost = { title: 'Angular API', body: 'Integrating API with Angular' };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Fetching data on component initialization
  }
}
