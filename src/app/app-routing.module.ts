import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { DisciplinaComponent } from './views/disciplina/disciplina.component';



const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path: "disciplinas",
    component: DisciplinaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
