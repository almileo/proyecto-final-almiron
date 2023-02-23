import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MODULOS
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';

//COMPONENTES
import { AppComponent } from './app.component';

//DIRECTIVES
import { TitulosDirective } from './shared/directives/titulos.directive';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    TitulosDirective,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AlumnosModule,
    CursosModule,
    SharedModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
