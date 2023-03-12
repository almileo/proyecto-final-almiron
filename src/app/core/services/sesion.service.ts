import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from 'src/app/shared/interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesion$!: BehaviorSubject<Sesion>;

  constructor() { 
    const sesion: Sesion = {
      sesionActiva: false
    }

    this.sesion$ = new BehaviorSubject<Sesion>(sesion);
  }

  crearSesion(sesion: Sesion) {
    this.sesion$.next(sesion);
  }

  getSesion(): Observable<Sesion> {
    return this.sesion$.asObservable();
  }

  logout(sesion: Sesion){
    this.sesion$.next(sesion);
  }
}
