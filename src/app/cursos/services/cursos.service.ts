import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/shared/interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: Curso[] = [
    { comision: 1 ,nombre: 'DeFi para todos', profesor: 'Juan', fechaInicio: new Date(2023,2,10), fechaFin: new Date(2023,2,15), esActivo: true }
  ] 
  cursos$: BehaviorSubject<any> = new BehaviorSubject(this.cursos);

  constructor() { }

  getCursos(): Observable<any> {
    return this.cursos$.asObservable();
  }

  createCurso(curso: any): void {
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
  }

  editCurso(curso: any): void {
    let index = this.cursos.findIndex(a => a.comision === curso.comision);

    if(index > -1){
      this.cursos[index] = curso;
      this.cursos$.next(this.cursos);
    }
  }

  deleteCurso(curso: any): void {
    let index = this.cursos.findIndex(a => a.comision === curso.comision);

    if(index > -1){
      this.cursos.splice(index, 1);
      this.cursos$.next(this.cursos);
    }
  }
}
