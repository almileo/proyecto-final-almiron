import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MODULOS
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { LoginComponent } from './auth/components/login/login.component';

//DIRECTIVES
import { TitulosDirective } from './shared/directives/titulos.directive';

import { CursosService } from './cursos/services/cursos.service';


@NgModule({
  declarations: [
    AppComponent,
    TitulosDirective,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
