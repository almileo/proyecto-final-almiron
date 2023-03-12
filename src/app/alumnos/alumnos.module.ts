import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { CumpleanosPipe } from './pipes/cumpleanos.pipe';
import { EsActivoPipe } from '../shared/pipes/es-activo.pipe';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosService } from './services/alumnos.service';
import { SharedModule } from '../shared/shared.module';



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
    SharedModule
  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
