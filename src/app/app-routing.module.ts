import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  {path : 'about', component : AboutComponent},
  {path : '**' , component: NotFoundComponent},
  {path : '', redirectTo: '/about', pathMatch :"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } ;

