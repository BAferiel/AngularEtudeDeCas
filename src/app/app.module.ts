import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UniverciteModule } from './univercite/univercite.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UniverciteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
