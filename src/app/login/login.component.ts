import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string='';
  password: string='';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}
  login() {
    this.userService.login(this.name, this.password).subscribe(
      (response: any) => {
        const token = response.token;
        this.userService.setToken(token);
        localStorage.setItem('role', response.role);
        this.router.navigate(['/welcome']);
        console.log('User object:', this.name);
      },
      (error: any) => {
        console.error('Login failed:', error);
        console.error('Error status:', error.status);
        console.error('Error body:', error.error);
        // Handle the error or display an appropriate error message
      }
    );
  }
}
