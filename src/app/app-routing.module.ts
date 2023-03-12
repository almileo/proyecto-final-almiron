import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'home' },
  { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then((modulo) => modulo.CursosModule) },
  { path: 'alumnos', loadChildren: () => import('./alumnos/alumnos.module').then((modulo) => modulo.AlumnosModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((modulo) => modulo.AuthModule) },
  { path: 'home', component: HomeComponent},
  // { path: 'auth/login', component: LoginComponent },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
