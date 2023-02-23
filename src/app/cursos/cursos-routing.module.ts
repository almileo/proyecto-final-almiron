import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { CursoListaComponent } from './components/curso-lista/curso-lista.component';

const routes: Routes = [
  { path: 'cursos', children: [
      { path: 'lista', component: CursoListaComponent },
      { path: 'agregar', component: CursoFormComponent },
      { path: '**', component: NotFoundComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
