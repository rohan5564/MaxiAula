import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { formatRut, validateRut } from '@fdograph/rut-utilities';
import { switchMap } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/services/auth.service';
import { Curso } from 'src/app/core/models/curso.model';
import { User } from 'src/app/core/models/user.model';
import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';
import { PopupService } from 'src/app/core/services/popup/popup.service';

@Component({
  selector: 'app-agregar-participantes',
  templateUrl: './agregar-participantes.component.html',
  styleUrls: ['./agregar-participantes.component.css']
})
export class AgregarParticipantesComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoP: CursoProviderService,
    private auth: AuthService,
    private fb: FormBuilder,
    private userP: UserProviderService,
    private popUp: PopupService,
  ) { }

  usuarioActual = this.auth.user;
  
  curso: Curso | undefined;

  rutForm: FormGroup = this.fb.group({
    rut: ['', [Validators.required]],
  });

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.cursoP.getCursoByID(id) )
    )
    .subscribe( (curso) => this.curso = curso );

   
  }


  async onSubmitRut(){
    
    let rut = formatRut(this.rutForm.controls['rut'].value) ;

    if ( validateRut( rut ) ) {

      let usuario = await this.userP.getUsuarioByRUT(rut).toPromise();

      //usuario$.subscribe(console.log)
      this.ingresarAlCurso(usuario, rut);
        
    }
    else this.popUp.aviso('Rut Inválido','El RUT ingresado esta incorrecto', 'error');
  }

  async ingresarAlCurso (usuario : User | undefined, rut : string) {

  
    if (usuario !== null && this.curso?.participantes.indexOf(rut) === -1) {

      this.curso?.participantes.push(rut);
      try {

        await this.cursoP.updateCursoById(this.curso._id, this.curso).toPromise();
        this.popUp.aviso('Usuario Ingresado!','Se ha ingresado correctamente el alumno al curso.','success');
        
      } catch (error) {
        
        this.popUp.aviso('Error al actualizar el curso!','No se pudo actualizar el curso','error');

      } 

    }
    else this.popUp.aviso('Usuario no identificado o ya esta inscrito','El Usuario no existe o ya se encuentra dentro del curso, utilice la pestaña de la derecha','info');
  }



}
