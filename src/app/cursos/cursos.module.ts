import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { CursoListaComponent } from './components/curso-lista/curso-lista.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CursoFormComponent,
    CursoListaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CursosModule { }
