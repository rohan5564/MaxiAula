import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { PopupService } from '../../core/services/popup/popup.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loading = false;
  
 // crear formulario de respuesta del login
  loginForm: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    contraseña: ['', [Validators.required]]
  });
  

  constructor( 
    private router: Router, 
    private authService: AuthService,
    private fb: FormBuilder,
    private popUp: PopupService
    ) { 
   
  }


  ngOnInit(): void {
  }


  campoEsValido( campo: string ) {

    return this.loginForm.controls[campo].errors 
            && this.loginForm.controls[campo].touched;
  }

  onSubmit(){
    
    if ( this.loginForm.invalid )  {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading = true;

    try {

      let usuario: Partial<User> = { // se crea un partial del usuario para hacer la peticion de login
        correo: this.loginForm.controls['correo'].value , // se obtiene el valor de los controles del formulario
        contraseña: this.loginForm.controls['contraseña'].value
      }

      this.authService.signInUser(usuario).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('id', res.user._id);
          //console.log(this.authService.user);
          
          switch (this.authService.user.tipo) { // segun el tipo de usuario se le manda a su seccion
            case 1: {
                    this.router.navigate(['./maxiaula/admin']);
                    break;
            }
            case 2: {
                    this.router.navigate(['./maxiaula/profesor']);
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
              this.popUp.aviso('¡Usuario no válido!','No tiene rol asignado, si usted es un profesor, espere que sea aprobado su acceso al sistema','error');
            }
          }

        },
        err => {
          console.log(err);
          this.popUp.aviso('¡Usuario no válido','¡Correo o Contraseña Incorrectos!, asegurese que se encuentran bien ingresados','error');
          this.loading = false;

        }
      );
    }
    catch(error){
      console.log('fallo :c', error);
    } 

  }

}
