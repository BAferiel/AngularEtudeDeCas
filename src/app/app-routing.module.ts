import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'sidebar', pathMatch: 'full' },
  {
    path:'universites',
    loadChildren:() =>
     import('./univercite/univercite.module').then((u) => u.UniverciteModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
