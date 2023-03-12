import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { SesionGuard } from '../core/guards/sesion.guard';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { CursoListaComponent } from './components/curso-lista/curso-lista.component';

const routes: Routes = [
  { path: '', canActivateChild: [SesionGuard], children: [
      { path: 'lista', component: CursoListaComponent },
      { path: 'agregar', component: CursoFormComponent, canActivate: [AdminGuard] },
      { path: '**', component: NotFoundComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
