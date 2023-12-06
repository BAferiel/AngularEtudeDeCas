import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniverciteRoutingModule } from './univercite-routing.module';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    ListUniversiteComponent,
    AddUniversiteComponent,
    SidebarComponent,
    FooterComponent
  
    
  ],
  imports: [
    CommonModule,
    UniverciteRoutingModule,
    FormsModule
  ]
})
export class UniverciteModule { }
