import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Alumno } from 'src/app/shared/interfaces/alumno';
import { map, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { CursosService } from '../../services/cursos.service';
import { CursoFormComponent } from '../curso-form/curso-form.component';
import { Curso } from 'src/app/shared/interfaces/curso';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/shared/interfaces/sesion';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent implements OnInit {
  
  columns: string[] = ['comision', 'nombre', 'profesor', 'fechaInicio', 'fechaFin', 'esActivo', 'acciones'];
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>;

  constructor(
    public dialog: MatDialog,
    private cursosSvc: CursosService,
    private sesionSvc: SesionService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cursos$ = this.cursosSvc.getCursos();
    this.sesion$ = this.sesionSvc.getSesion();
  }

  agregarCurso(){
    this.dialog.open(CursoFormComponent);
  }

  eliminarCurso(curso: Curso){
    this.cursosSvc.deleteCurso(curso.id).subscribe((curso) => {
      this.snackbar.open(`Curso ${curso.nombre} eliminado correctamente.`)
      this.cursos$ = this.cursosSvc.getCursos();
    })
  }

  editarCurso(curso: Curso) {
    this.dialog.open(CursoFormComponent, {
      data: curso
    }).afterClosed().subscribe(() => {
      this.cursos$ = this.cursosSvc.getCursos();
    })
  }


}
