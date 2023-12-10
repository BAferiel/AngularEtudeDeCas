import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
=======
import { NavbarComponent } from './module/core/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ProfileComponent } from './component/profile/profile.component';
import { JwtModule } from '@auth0/angular-jwt';
import { CoreModule } from './module/core/core.module';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    NavbarComponent,
=======
>>>>>>> Stashed changes
    FooterComponent,
    SidebarComponent,
    RegistrationComponent,
    LoginComponent,
    WelcomeComponent,
    ProfileComponent
  ],
<<<<<<< Updated upstream
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
=======
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,CoreModule,
    JwtModule.forRoot({
    config: {
      allowedDomains: ['localhost:4200'], // replace with your actual API domain
      disallowedRoutes: ['localhost:4200/login'], // replace with your login route
    },
  }),],
>>>>>>> Stashed changes
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
