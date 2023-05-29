import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BirraComponent } from './birra/birra.component';


const routes: Routes = [
  {path : "search" , component:SearchComponent},
  {path : "birra", component:BirraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
