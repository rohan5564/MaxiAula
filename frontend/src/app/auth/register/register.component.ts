import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { EmailValidatorService } from '../../utilities/validator/email-validator.service';
import { PopupService } from '../../core/services/popup/popup.service';
import { Router } from '@angular/router';
import { RutValidatorService } from '../../utilities/validator/rut-validator.service';
import { User } from 'src/app/core/models/user.model';
import { ValidatorService } from '../../utilities/validator/validator.service';
import { formatRut } from '@fdograph/rut-utilities'; // formateador de rut para guardar

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading = false;

  // crear formulario de respuesta del registro paso 1
  registroForm1: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email], [this.emailValidator]],
    contra: ['', [Validators.required, Validators.minLength(8)]],
    confcontra: ['', [Validators.required]],
  },
  {
    validators: [ this.validSer.camposIguales('contra','confcontra') ]
  });

  registroForm2: FormGroup = this.fb.group({
    nombre: ['', [Validators.required] ],
    tipo: ['3',[]],
    fecha: ['', [Validators.required]],
    rut: ['', [Validators.required], [this.rutValidator]],
  },
  {
    validators: [ this.validSer.rutInvalid('rut') ]
  });

  public paso : boolean;
  constructor( 
    private router: Router, 
    private authService: AuthService,
    private fb: FormBuilder,
    private validSer: ValidatorService,
    private emailValidator: EmailValidatorService,
    private rutValidator: RutValidatorService,
    private popUp : PopupService
    
     ) { 
    this.paso = true;
  }


  ngOnInit(): void {

  }

  get emailErrorMsg(): string {
    
    const errors = this.registroForm1.get('correo')?.errors;
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
    
    const errors = this.registroForm2.get('rut')?.errors;
    if ( errors?.rutInvalido ) {
      return 'El RUT no es válido!';
    } 
    else if ( errors?.rutTomado ) {
      return 'El RUT ya se encuentra registrado en el sistema!';
    }

    return '';
  }

  campoNoValido( campo: string ) {
    return this.registroForm1.get(campo)?.invalid
            && this.registroForm1.get(campo)?.touched;
  }

  campoNoValido2( campo: string ) {
    return this.registroForm2.get(campo)?.invalid
            && this.registroForm2.get(campo)?.touched;
  }

  correo = '';
  contraseña = '';
  onSubmitStep1(){
    if ( this.registroForm1.invalid )  {
      this.registroForm1.markAllAsTouched();
      return;
    }
    this.paso = false;
    this.correo = this.registroForm1.controls['correo'].value;
    this.contraseña = this.registroForm1.controls['contra'].value;


    
   // console.log(this.correo, this.contraseña)

  }


  async onSubmitStep2() {
    if ( this.registroForm2.invalid )  {
      this.registroForm2.markAllAsTouched();
      return;
    }
    this.loading = true;

    let usuario: Partial<User> = {
        correo : this.correo,
        nombre: this.registroForm2.controls['nombre'].value,
        contraseña: this.contraseña,
        rut: formatRut(this.registroForm2.controls['rut'].value), 
        fechaNac: this.registroForm2.controls['fecha'].value,
        tipo: this.registroForm2.controls['tipo'].value
    }

    try {
      this.authService.signUpUser(usuario).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('id', res.user._id);

          //alert('Usuario registrado con exito!');
          this.popUp.aviso('Felicidades!','El usuario ha sido registrado exitosamente!','success');
      
          switch (this.authService.user.tipo) { // segun el tipo de usuario se le manda a su seccion
            case 0: {
                    this.popUp.aviso('Debe esperar!','Ahora debe esperar que un administrador le autorice el acceso','info');
                    this.router.navigate(['./']);
                    break;
            }
            case 3: {
                    this.router.navigate(['./maxiaula/alumno']);
                    break;
            }
            case 4: {
                    this.router.navigate(['./maxiaula/apoderado']);
                    break;
            }
            default: {
              this.popUp.aviso('Usuario no válido!','No tiene rol asignado, si usted es un profesor, espere que sea aprobado su acceso al sistema','info');
            
            }
          }
        },
        err => {
          console.log(err);
          this.popUp.aviso('Usuario no válido!','El usuario ya se encuentra registrado','error');
          this.loading = false;  
        }
        );
   
    }
    catch(error){
      this.popUp.aviso('Error!','Algo falló','error');
      console.log('fallo :c', error);
    }


  }

}
