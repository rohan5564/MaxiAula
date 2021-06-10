import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../../auth/services/auth.service';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { PopupService } from '../../../core/services/popup/popup.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  usuarioActual = this.auth.user;

  currentTime = new Date();
  year = this.currentTime.getFullYear();

  nuevoCursoForm = this.fb.group({
    nombre: ['',[Validators.required]],
    descripcion: ['', [Validators.required]],
    semestre: ['1', [Validators.required]],
    portada: ['', ],
    linkChat: ['',]

    
  });
  
  statuses : SelectItem[] = [{label: '1er Semestre', value: 1},{label: '2do Semestre', value: 2}];

  constructor(
    private popUp: PopupService,
    private cursoP: CursoProviderService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  campoNoValido( campo: string ) {
    return this.nuevoCursoForm.get(campo)?.invalid
            && this.nuevoCursoForm.get(campo)?.touched;
  }

  async onSubmitCrearCurso(){
    if ( this.nuevoCursoForm.invalid )  {
      this.nuevoCursoForm.markAllAsTouched();
      return;
    }
    
   // console.log(this.nuevoCursoForm.controls['nombre'].value, this.nuevoCursoForm.controls['descripcion'].value, this.nuevoCursoForm.controls['portada'].value, this.nuevoCursoForm.controls['semestre'].value)

    this.popUp.pregunta('¿Desea crear este curso?','El curso se creará','question')
    .then( async result => {
       if (result.isConfirmed) {

          let cursoNuevo: Partial<Curso> = {
            nombre: this.nuevoCursoForm.controls['nombre'].value,
            descripcion: this.nuevoCursoForm.controls['descripcion'].value,
            profACargo: this.usuarioActual.rut,
            portadaURL: this.nuevoCursoForm.controls['portada'].value,
            semestre: this.nuevoCursoForm.controls['semestre'].value,
            linkChat: this.nuevoCursoForm.controls['linkChat'].value,
            anio: this.year        
          }

        //  console.log(cursoNuevo);

          await this.cursoP.addCurso(cursoNuevo).toPromise();
          this.popUp.aviso('¡Se ha creado el curso!','El curso se creó correctamente','success');
          this.router.navigate(['/maxiaula/profesor/cursos']);

       }
    });

  }

}
