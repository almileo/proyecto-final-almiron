import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlumnosData } from 'src/app/shared/data/alumnos.data';

@Injectable()
export class AlumnosService {

  alumnos: Array<any> = AlumnosData;
  alumnos$: BehaviorSubject<any> = new BehaviorSubject(this.alumnos);

  constructor() { }

  getAlumnos(): Observable<any> {
    return this.alumnos$.asObservable();
  }

  createAlumno(alumno: any): void {
    this.alumnos.push(alumno);
    this.alumnos$.next(this.alumnos);
  }

  editAlumno(alumno: any): void {
    let index = this.alumnos.findIndex(a => a.id === alumno.id);

    if(index > -1){
      this.alumnos[index] = alumno;
      this.alumnos$.next(this.alumnos);
    }
  }

  deleteAlumno(alumno: any): void {
    let index = this.alumnos.findIndex(a => a.id === alumno.id);

    if(index > -1){
      this.alumnos.splice(index, 1);
      this.alumnos$.next(this.alumnos);
    }
  }

}
