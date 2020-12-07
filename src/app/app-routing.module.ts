import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { DisciplinaComponent } from './views/disciplina/disciplina.component';
import { DisciplinaCreateComponent } from './components/disciplina/disciplina-create/disciplina-create.component';


const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path: "disciplinas",
    component: DisciplinaComponent
  },
  {
    path: "disciplinas/create",
    component: DisciplinaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
