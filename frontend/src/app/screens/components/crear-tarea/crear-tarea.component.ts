import { Component, Input, OnInit } from '@angular/core';
import { Curso, Tarea } from 'src/app/core/models/curso.model';
import { FormBuilder, Validators } from '@angular/forms';

import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { MailService } from '../../../core/services/mail/mail.service';
import { PopupService } from '../../../core/services/popup/popup.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent implements OnInit {

  @Input()
  cursoActual : Curso | undefined;
  @Input()
  usuarioActual: User | undefined;

  nuevaTareaForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    fechaInicio: [new Date(), Validators.required],
    fechaLimite: ['', Validators.required]
  });

  constructor(
    private popUp: PopupService,
    private cursoP: CursoProviderService,
    private fb: FormBuilder,
    private router: Router,
    private mail: MailService
  ) { }

  ngOnInit(): void {
  }

  campoNoValido( campo: string ) {
    return this.nuevaTareaForm.get(campo)?.invalid
            && this.nuevaTareaForm.get(campo)?.touched;
  }

  onSubmitTarea() {
    if ( this.nuevaTareaForm.invalid )  {
      this.nuevaTareaForm.markAllAsTouched();
      return;
    }

    let nuevaTarea : Tarea = {
      nombreTarea: this.nuevaTareaForm.controls['nombre'].value,
      descripcion: this.nuevaTareaForm.controls['descripcion'].value,
      fechaInicio: this.nuevaTareaForm.controls['fechaInicio'].value,
      fechaLimite: this.nuevaTareaForm.controls['fechaLimite'].value,
      estado: 0
    }
    
    this.popUp.pregunta('¿Quiere añadir esta tarea?','Se añadirá la tarea al curso','question')
    .then( async result => {
      if (result.isConfirmed) {
        try {
          
          this.cursoActual?.tareas?.push(nuevaTarea);

          await this.cursoP.updateCursoById(this.cursoActual!._id, this.cursoActual!).toPromise();

          this.popUp.aviso('Felicidades!','¡La tarea se añadió exitosamente!','success');
          (this.usuarioActual?.tipo === 2) ? this.router.navigate(['/maxiaula/profesor/curso/' + this.cursoActual!._id]) : this.router.navigate(['/maxiaula/admin/curso/' + this.cursoActual!._id]);
          
          await this.mail.avisarNuevaTarea(this.cursoActual!.nombre, this.usuarioActual!.nombre, this.cursoActual!.participantes);   
                 
        }
        catch(error){
          this.popUp.aviso('Error!','Algo falló','error');
          console.log('fallo :c', error);
        }
      }
    });
   // console.log(nuevaTarea)

  }

}
