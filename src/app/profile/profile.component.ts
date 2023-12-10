import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditing = false;
  isLoggedIn: boolean = true;
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    let userRoles: string[] = [];

    if (this.user?.roles) {
      // Check if it's a string, and convert it to an array if necessary
      userRoles = typeof this.user.roles === 'string' ? [this.user.roles] : this.user.roles;
    }
    const isAdmin = userRoles.includes('ROLE_ADMIN');

    const profileObservable = isAdmin
      ? this.userService.getAdminProfile()
      : this.userService.getUserProfile();

    profileObservable.subscribe(
      (data) => {
        this.user = data;
        console.log('User profile loaded:', this.user);
      },
      (error) => {
        console.error('Error loading user profile:', error);
      }
    );
  }

  logout() {
    this.userService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
