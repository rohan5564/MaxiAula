import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailValidatorService } from 'src/app/utilities/validator/email-validator.service';
import { PopupService } from 'src/app/core/services/popup/popup.service';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from '../../../core/providers/user/user-provider.service';
import { ValidatorService } from 'src/app/utilities/validator/validator.service';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent implements OnInit {

  @Input()
  usuarioActual: User |undefined;

  editPerfilForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailValidator: EmailValidatorService,
    private popUp : PopupService,
    private validSer: ValidatorService,
    private userP: UserProviderService
  ) { }

  ngOnInit(): void {
    this.editPerfilForm = this.fb.group({
      nombre: [this.usuarioActual!.nombre, [Validators.required] ],
      correo: [this.usuarioActual!.correo, [Validators.required, Validators.email], [this.emailValidator]],
      fecha: [this.usuarioActual!.fechaNac, [Validators.required]],
      contra: ['', [Validators.required, Validators.minLength(8)]],
      confcontra: ['', [Validators.required]],
    },
    {
      validators: [ this.validSer.camposIguales('contra','confcontra') ]
    });
  }

  get emailErrorMsg(): string {
    
    const errors = this.editPerfilForm.get('correo')?.errors;
    if ( errors?.required ) {
      return 'Email es obligatorio';
    } else if ( errors?.email ) {
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors?.emailTomado && this.editPerfilForm.controls['correo'].value !== this.usuarioActual?.correo ) {
      return 'El email ya se encuentra registrado';
    }

    return '';
  }

  campoNoValido( campo: string ) {
    return this.editPerfilForm.get(campo)?.invalid
            && this.editPerfilForm.get(campo)?.touched;
  }

  async onSubmitEdit() {
    let contra = this.editPerfilForm.controls['contra'].value;
    if(this.editPerfilForm.controls['correo'].value === this.usuarioActual?.correo) {
      this.editPerfilForm.controls['correo'].updateValueAndValidity();
    }
    if (!contra) {
      contra = this.usuarioActual?.contraseña;
    }
    if ( this.editPerfilForm.invalid )  {
      this.editPerfilForm.markAllAsTouched();
      return;
    }
  

    let usuarioEditado: Partial<User> = {
        nombre: this.editPerfilForm.controls['nombre'].value,
        correo: this.editPerfilForm.controls['correo'].value,
        contraseña: contra,
        fechaNac: this.editPerfilForm.controls['fecha'].value      
    }

    this.popUp.pregunta('¿Quiere editar su usuario?','Se modificará la información de su usuario','question')
    .then( async result => {
      if (result.isConfirmed) {

          await this.userP.updateUsuarioById(this.usuarioActual!._id, usuarioEditado).toPromise();
          this.popUp.aviso('Se ha editado su usuario','Se editó correctamente su usuario','success');
      }
    });

   // console.log(usuarioEditado)

  }

}
