import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/shared/interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private sesionSvc: SesionService,
    private router: Router
  ) { }

  login(usuario: any) {
    const sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: usuario
    }

    this.sesionSvc.crearSesion(sesion);
    this.router.navigate(['home'])
  }

  logout(){
    const sesion: Sesion = {
      sesionActiva: false
    }
    this.sesionSvc.logout(sesion);
    this.router.navigate(['auth/login']);
  }
}
