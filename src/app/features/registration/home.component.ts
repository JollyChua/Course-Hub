import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from '../../services/user.service';  // import the user service
import { FormsModule } from '@angular/forms';  // Import FormsModule here
import { RouterModule, Router } from '@angular/router';
import { TopNavComponent } from '../../shared/top-nav/top-nav.component';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [FormsModule, RouterModule, TopNavComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class HomeComponent {
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  confirmPassword: string = '';
  phoneNumber: string = '';
  birthDate: string = '';
  email: string = '';

  constructor(private userService: UserService, private router: Router) {}

  // Handle form submission
  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      phoneNumber: String(this.phoneNumber),
      birthDate: this.birthDate,
      email: this.email
    };

    this.userService.registerUser(userData).subscribe(response => {
    }, error => {
      console.error('Error registering user:', error);
      alert('Registration failed');
    });

    this.router.navigate(['/courses']);
  }
}
