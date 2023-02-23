import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Alumno } from 'src/app/shared/interfaces/alumno';
import { AlumnosFormComponent } from '../alumnos-form/alumnos-form.component';
import { AlumnosService } from '../../services/alumnos.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css']
})
export class AlumnosListaComponent implements OnInit {

  alumnos: any;
  columns: string[] = ['id', 'nombre', 'email', 'curso', 'esActivo', 'acciones'];
  alumnos$!: Observable<any>;
  dataSource = new MatTableDataSource<any>();

  constructor(
    public dialog: MatDialog,
    private alumnosSvc: AlumnosService
  ) {}

  ngOnInit(): void {
    this.alumnosSvc.getAlumnos().subscribe((alumnos) => {
      console.log(alumnos);
      this.dataSource.data = alumnos;
    })
  }

  agregarAlumno(){
    this.dialog.open(AlumnosFormComponent);
  }

  eliminarAlumno(alumno: Alumno){
    this.alumnosSvc.deleteAlumno(alumno);
  }

  editarAlumno(alumno: Alumno) {
    this.dialog.open(AlumnosFormComponent, {
      data: alumno
    })
  }


}
