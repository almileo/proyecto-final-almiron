import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { CumpleanosPipe } from './pipes/cumpleanos.pipe';
import { EsActivoPipe } from '../shared/pipes/es-activo.pipe';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosService } from './services/alumnos.service';



@NgModule({
  declarations: [
    AlumnosListaComponent,
    AlumnosFormComponent,
    NombreCompletoPipe,
    CumpleanosPipe,
    EsActivoPipe,
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
