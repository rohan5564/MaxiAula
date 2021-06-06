import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { PopupService } from '../../../core/services/popup/popup.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})
export class CursoEditComponent implements OnInit {

  @Input()
  cursoActual: Curso | undefined;

  editCursoForm = this.fb.group({
    nombre: ['',[Validators.required]],
    descripcion: ['', [Validators.required]],
    semestre: ['1', [Validators.required]],
    portada: ['', ]

    
  });

  statuses : SelectItem[] = [{label: '1er Semestre', value: 1},{label: '2do Semestre', value: 2}];

  constructor(
    private cursoP: CursoProviderService,
    private popUp: PopupService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  campoNoValido( campo: string ) {
    return this.editCursoForm.get(campo)?.invalid
            && this.editCursoForm.get(campo)?.touched;
  }

  async onSubmitEditCurso(){
    if ( this.editCursoForm.invalid )  {
      this.editCursoForm.markAllAsTouched();
      return;
    }

    this.popUp.pregunta('¿Desea editar este curso?','El curso se editará para siempre','question')
    .then( async result => {
       if (result.isConfirmed) {

          let cursoEditado: Partial<Curso> = {
            nombre: this.editCursoForm.controls['nombre'].value,
            descripcion: this.editCursoForm.controls['descripcion'].value,
            portadaURL: this.editCursoForm.controls['portada'].value,
            semestre: this.editCursoForm.controls['semestre'].value,       
          }

      

          await this.cursoP.updateCursoById(this.cursoActual!._id,cursoEditado).toPromise();
          this.popUp.aviso('¡Se ha editado el curso!','El curso se editó correctamente','success');
          this.router.navigate(['/maxiaula/profesor/curso/' + this.cursoActual!._id]);

       }
    });

  }

}