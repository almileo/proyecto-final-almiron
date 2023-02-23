import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/shared/interfaces/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.css']
})
export class AlumnosFormComponent implements OnInit {

  alumnoForm!: FormGroup;
  alumno?: Alumno;
  isEdit!: boolean;
  titulo: string = 'Agregar Alumno'
  emailRegex: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(
    private alumnosSvc: AlumnosService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Alumno
  ) {
    console.log('data: ', this.data);
    
    this.alumno = this.data;
   }
  
  async ngOnInit() {
    this.initForm();
    if (this.alumno) {
      this.titulo = 'Editar Alumno';
    }
  }

  initForm(){
    this.alumnoForm = this.fb.group({
      id: [null, [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      curso: [''],
      esActivo: [false, [Validators.required]],
      edad: ['', [Validators.required]],
      cumpleanos: ['']
    });

    if(this.alumno){
      this.alumnoForm.patchValue(this.alumno)
    }
  }

  cerrarModal() {
    this.dialog.closeAll()
  }

  guardar() {
    const alumno = this.alumnoForm.value;

    if(this.data) {
      this.alumnosSvc.editAlumno(alumno);
      this.dialog.closeAll();
    } else {
      this.alumnosSvc.createAlumno(alumno);
      this.dialog.closeAll();
    }
  }



}
