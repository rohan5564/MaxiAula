import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Notas } from 'src/app/core/models/curso.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PopupService } from '../../../core/services/popup/popup.service';

export interface DialogData {
  notas: Notas;
  notaNueva: number;
}

@Component({
  selector: 'app-dialog-notas',
  templateUrl: './dialog-notas.component.html',
  styleUrls: ['./dialog-notas.component.css']
})
export class DialogNotasComponent implements OnInit {


  notasForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogNotasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private popUp: PopupService,
    private fb: FormBuilder
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
    this.notasForm = this.fb.group({
      nota: ['', ],
      nuevaNota: ['', ]
    });
  }

  eliminarNota(nota: number, notas: number[]) {
    
    this.popUp.pregunta('¿Eliminar Nota?', 'Se eliminará la nota del alumno', 'error')
    .then( resp => {
      if (resp.isConfirmed) {
        
        notas.forEach((item: number, index: number) => {
          if (item == nota) notas.splice(index, 1);
        });
        
        
      }
    })
    

  }

  onSubmitNotas() {

  }

}
