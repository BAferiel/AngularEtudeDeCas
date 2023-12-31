<<<<<<< Updated upstream
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full'},

  { path: '**', redirectTo: '/login' },
=======
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ProfileComponent } from './component/profile/profile.component';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: 'welcome', component: WelcomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    component: ProfileComponent
  }, {
    path: 'admin',
    canActivate: [authGuard],
    data: { roles: 'ROLE_ADMIN' },
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)
  },
/*   { path: '', redirectTo: '/welcome', pathMatch: 'full' }, */
  { path: '', redirectTo: '/register', pathMatch: 'full'},
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
