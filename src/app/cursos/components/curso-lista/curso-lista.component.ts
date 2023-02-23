import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Alumno } from 'src/app/shared/interfaces/alumno';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { CursosService } from '../../services/cursos.service';
import { CursoFormComponent } from '../curso-form/curso-form.component';
import { Curso } from 'src/app/shared/interfaces/curso';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent implements OnInit {

  
  alumnos: any;
  columns: string[] = ['comision', 'nombre', 'profesor', 'fechaInicio', 'fechaFin', 'esActivo', 'acciones'];
  alumnos$!: Observable<any>;
  dataSource = new MatTableDataSource<any>();

  constructor(
    public dialog: MatDialog,
    private cursosSvc: CursosService
  ) {}

  ngOnInit(): void {
    this.cursosSvc.getCursos().subscribe((alumnos) => {
      console.log(alumnos);
      this.dataSource.data = alumnos;
    })
  }

  agregarCurso(){
    this.dialog.open(CursoFormComponent);
  }

  eliminarCurso(curso: Curso){
    this.cursosSvc.deleteCurso(curso);
  }

  editarCurso(curso: Curso) {
    this.dialog.open(CursoFormComponent, {
      data: curso
    })
  }


}
