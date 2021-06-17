import { Component, Input, OnInit } from '@angular/core';
import { Curso, Notas } from 'src/app/core/models/curso.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatRut, validateRut } from '@fdograph/rut-utilities';

import { AuthService } from '../../../auth/services/auth.service';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { EmailValidatorService } from 'src/app/utilities/validator/email-validator.service';
import { PopupService } from '../../../core/services/popup/popup.service';
import { RutValidatorService } from 'src/app/utilities/validator/rut-validator.service';
import { User } from 'src/app/core/models/user.model';
import { ValidatorService } from 'src/app/utilities/validator/validator.service';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.css']
})
export class AgregarUsuariosComponent implements OnInit {

  @Input()
  cursoActual: Curso | undefined;

  @Input()
  usuarioActual: User | undefined;
  
  registrarForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required] ],
    correo: ['', [Validators.required, Validators.email], [this.emailValidator]],
    tipo: ['3',[]],
    fecha: ['', [Validators.required]],
    rut: ['', [Validators.required], [this.rutValidator]],
  },
  {
    validators: [ this.validSer.rutInvalid('rut') ]
  });


  constructor(
    private popUp: PopupService,
    private authService: AuthService,
    private cursoP: CursoProviderService,
    private fb: FormBuilder,
    private validSer: ValidatorService,
    private emailValidator: EmailValidatorService,
    private rutValidator: RutValidatorService,
  ) { }

  ngOnInit(): void {
    

  }


  get emailErrorMsg(): string {
    
    const errors = this.registrarForm.get('correo')?.errors;
    if ( errors?.required ) {
      return 'Email es obligatorio';
    } else if ( errors?.email ) {
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors?.emailTomado ) {
      return 'El email ya se encuentra registrado';
    }

    return '';
  }
  get rutErrorMsg(): string {
    
    const errors = this.registrarForm.get('rut')?.errors;
    if ( errors?.rutInvalido ) {
      return 'El RUT no es válido!';
    } 
    else if ( errors?.rutTomado ) {
      return 'El RUT ya se encuentra registrado en el sistema!';
    }

    return '';
  }

  campoNoValido( campo: string ) {
    return this.registrarForm.get(campo)?.invalid
            && this.registrarForm.get(campo)?.touched;
  }

  contraseña = 'maxiaula';
  async onSubmitRegistrarForm() {
    if ( this.registrarForm.invalid )  {
      this.registrarForm.markAllAsTouched();
      return;
    }

    let usuario: Partial<User> = {
      correo : this.registrarForm.controls['correo'].value,
      nombre: this.registrarForm.controls['nombre'].value,
      contraseña: this.contraseña,
      rut: formatRut(this.registrarForm.controls['rut'].value), 
      fechaNac: this.registrarForm.controls['fecha'].value,
      tipo: this.registrarForm.controls['tipo'].value
  }

  try {
    this.authService.signUpUser(usuario).subscribe(
      async res => {
                 
        if (this.usuarioActual?.tipo === 2 && this.cursoActual?._id) { // si lo inscribio un profesor y lo añadera al curso
              let notas: Notas ={
                  rutAlumno: usuario.rut!,
                  notas: [],
                  promedio: 0
              }
              this.cursoActual.notas?.push(notas);
              this.cursoActual?.participantes.push(usuario.rut!);
              try {

                await this.cursoP.updateCursoById(this.cursoActual._id, this.cursoActual).toPromise();
                this.popUp.aviso('Usuario Ingresado!','Se ha registrado e ingresado correctamente el alumno al curso.','success');
                
              } catch (error) {
                
                this.popUp.aviso('Error al actualizar el curso!','No se pudo actualizar el curso','error');

              } 
        }
        else this.popUp.aviso('Felicidades!','El usuario ha sido registrado exitosamente!','success');

        this.registrarForm.reset();        
      },
      err => {
        console.log(err);
        this.popUp.aviso('Usuario no válido!','El usuario ya se encuentra registrado','error');          
      }
      );
 
  }
  catch(error){
    this.popUp.aviso('Error!','Algo falló','error');
    console.log('fallo :c', error);
  }





  }


}
