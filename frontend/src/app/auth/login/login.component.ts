import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario: Partial<User> = {
    correo: "profesor@profe.com" ,
    contraseña: "profesosr"
  }

  public loginInvalid = false;
  

  constructor( private router: Router, private authService: AuthService ) { 
   
    try {
      this.authService.signInUser(this.usuario).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          console.log(authService.user);

          switch (authService.user.tipo) {
            case 1: {
                    this.router.navigate(['./admin']);
                    break;
            }
            case 2: {
                    this.router.navigate(['./profesor']);
                    break;
            }
            case 3: {
                    this.router.navigate(['./alumno']);
                    break;
            }
            case 4: {
                    this.router.navigate(['./apoderado']);
                    break;
            }
            default: {
              alert('Usuario no válido, no tiene rol asignado');
            }
          }

        },
        err => {
          console.log(err);
          alert('Correo o Contraseña Incorrectos!');
        }
      );
    }
    catch(error){
      console.log('fallo :c', error);
    } 

  }


  ngOnInit(): void {
  }

  onSubmit(){


  }

}
