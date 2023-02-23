import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';

const routes: Routes = [
  { path: 'alumnos', children: [
      { path: 'lista', component: AlumnosListaComponent },
      { path: 'agregar', component: AlumnosFormComponent },
      { path: '**', component: NotFoundComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
