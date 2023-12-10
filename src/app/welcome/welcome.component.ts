import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  user: User = new User();
  isLoggedIn = false; // Initialize as not logged in

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    // Inject the UserService
    this.isLoggedIn = userService.isAuthenticated();
    
  }
OnInit(){console.log('User object:', this.user);}
  login() {
    this.router.navigate(['/login']);
    console.log('User object:', this.user);

  }

  viewProfile() {
    if (localStorage.getItem('role') === 'ROLE_USER') {
      this.router.navigate(['user/userProfile']);
    }else if (localStorage.getItem('role') === 'ROLE_ADMIN') {
      console.log("test")
      this.router.navigate(['admin/adminProfile']);
    }
  }

  logout() {
    this.userService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
