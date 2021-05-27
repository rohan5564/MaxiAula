import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  
 // crear formulario de respuesta del login
  loginForm: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    contraseña: ['', [Validators.required]]
  });
  

  constructor( 
    private router: Router, 
    private authService: AuthService,
    private fb: FormBuilder ) { 
   
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
              alert('Usuario no válido, no tiene rol asignado');
            }
          }

        },
        err => {
          console.log(err);
          alert('Correo o Contraseña Incorrectos!!');
        }
      );
    }
    catch(error){
      console.log('fallo :c', error);
    } 

  }

}
