import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { CursoListaComponent } from './components/curso-lista/curso-lista.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CursosService } from './services/cursos.service';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    CursoFormComponent,
    CursoListaComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [CursosService]
})
export class CursosModule { }
