import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Curso } from 'src/app/shared/interfaces/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  cursoForm!: FormGroup;
  curso?: Curso;
  isEdit!: boolean;
  titulo: string = 'Crear Curso'

  constructor(
    private cursosSvc: CursosService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<CursoFormComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ) {
    console.log('data: ', this.data);
    this.curso = this.data;
   }
  
  async ngOnInit() {
    this.initForm();
    if (this.curso) {
      this.titulo = 'Editar Curso';
    }
  }

  initForm(){
    this.cursoForm = this.fb.group({
      id: [''],
      comision: [null, [Validators.required]],
      nombre: ['', [Validators.required]],
      profesor: ['', [Validators.required]],
      fechaInicio: [[Validators.required]],
      fechaFin: [[Validators.required]],
      esActivo: [false]
    });

    if(this.curso){
      this.cursoForm.patchValue(this.curso)
    }
  }

  cerrarModal() {
    this.dialog.closeAll()
  }

  guardar() {
    const curso = this.cursoForm.value;
    console.log('curso : ', curso);
    

    if(this.data) {
      this.cursosSvc.editCurso(curso).subscribe(curso => {
        this.snackbar.open(`Curso ${curso.nombre} editado correctamente.`);
        this.dialogRef.close(true);
      })
      // this.dialog.closeAll();
    } else {
      this.cursosSvc.createCurso(curso).subscribe(curso => {
        this.snackbar.open(`Curso ${curso.nombre} creado correctamente.`);
        this.dialogRef.close(true);
      })
      // this.dialog.closeAll();
    }
  }



}
