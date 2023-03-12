import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', children: [
      { path: 'login', component: LoginComponent },
      { path: '**', component: NotFoundComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
