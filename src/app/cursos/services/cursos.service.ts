import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/shared/interfaces/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private  http: HttpClient
  ) { }

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${environment.apiURL}/cursos`);
  }

  createCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${environment.apiURL}/cursos`, curso);
  }

  editCurso(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${environment.apiURL}/cursos/${curso.id}`, curso);
  }

  deleteCurso(cursoId: string): Observable<Curso> {
    return this.http.delete<Curso>(`${environment.apiURL}/cursos/${cursoId}`);
  }
}
