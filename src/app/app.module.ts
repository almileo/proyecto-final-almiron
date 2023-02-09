import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MODULOS
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//COMPONENTES
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AlumnosListaComponent } from './components/alumnos/alumnos-lista/alumnos-lista.component';
import { AlumnosFormComponent } from './components/alumnos/alumnos-form/alumnos-form.component';

//PIPES
import { NombreCompletoPipe } from 'src/app/pipes/nombre-completo.pipe';
import { CumpleanosPipe } from './pipes/cumpleanos.pipe';
import { EsActivoPipe } from './pipes/es-activo.pipe';

//DIRECTIVES
import { TitulosDirective } from './directives/titulos.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AlumnosListaComponent,
    AlumnosFormComponent,
    NombreCompletoPipe,
    CumpleanosPipe,
    EsActivoPipe,
    TitulosDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
