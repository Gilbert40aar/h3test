import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Frontpage} from './home/frontpage/frontpage';
import {About} from './home/about/about';
import {Blog} from './home/blog/blog';
import {Contact} from './home/contact/contact';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: Frontpage},
  {path: "about", component: About},
  {path: "blog", component: Blog},
  {path: "contact", component: Contact}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
