import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { AlumnosData } from 'src/app/data/alumnos.data';
import { Alumno } from 'src/app/interfaces/alumno';
import { NombreCompletoPipe } from 'src/app/pipes/nombre-completo.pipe';
import { AlumnosFormComponent } from '../alumnos-form/alumnos-form.component';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css']
})
export class AlumnosListaComponent implements OnInit {

  alumnos: Array<Alumno> = AlumnosData;
  columns: string[] = ['nombre', 'email', 'curso', 'esActivo', 'acciones'];

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  agregarAlumno(){
    this.dialog.open(AlumnosFormComponent)
  }

  verAlumno(alumno: Alumno) {}

  eliminarAlumno(alumno: Alumno){}

  editarAlumno(alumno: Alumno) {
    this.dialog.open(AlumnosFormComponent, {
      data: alumno
    })
  }


}
