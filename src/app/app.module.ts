import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { UniverciteModule } from './univercite/univercite.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    WelcomeComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
   
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,UniverciteModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
