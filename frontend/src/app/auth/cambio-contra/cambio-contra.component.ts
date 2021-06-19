import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { PopupService } from '../../core/services/popup/popup.service';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from '../../core/providers/user/user-provider.service';
import { ValidatorService } from 'src/app/utilities/validator/validator.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-cambio-contra',
  templateUrl: './cambio-contra.component.html',
  styleUrls: ['./cambio-contra.component.css']
})
export class CambioContraComponent implements OnInit {

 
  decoded: any;

  usuario: User | undefined;

  cambioContraForm = this.fb.group({
    contra: ['', [Validators.required]],
    confContra: ['', [Validators.required, Validators.minLength(8)]]
  }
  ,
  {
    validators: [ this.validSer.camposIguales('contra','confContra') ]
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private userP: UserProviderService,
    private fb: FormBuilder,
    private validSer: ValidatorService,
    private popUp: PopupService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(  ({ token }) => this.decoded = jwt_decode(token) );
    

    const { _id, email } = this.decoded; // desestructurar el objeto decodificado del token
    if (!email) {
      this.popUp.aviso('¡Token no válido!', 'El token para cambiar de contraseña no es válido o ha expirado', 'error');
      this.router.navigate(['/auth/login']);
    }

    this.userP.getUsuarioByEmail(email).subscribe(user => this.usuario = user);

 
  }

  campoEsValido( campo: string ) {

    return this.cambioContraForm.controls[campo].errors 
            && this.cambioContraForm.controls[campo].touched;
  }

  onSubmitCambio() {
    if ( this.cambioContraForm.invalid )  {
      this.cambioContraForm.markAllAsTouched();
      return;
    }

    this.popUp.pregunta('¿Desea cambiar por esta contraseña?', 'Se cambiará la contraseña de su usuario','question')
    .then( async resp => {
      if (resp.isConfirmed) {

        let nuevoConUser: Partial<User> = {
          contraseña: this.cambioContraForm.controls['contra'].value
        }

        await this.userP.updateUsuarioById(this.usuario!._id, nuevoConUser).toPromise();
        this.popUp.aviso('Se cambio su contraseña', 'Se cambio correctamente su contraseña', 'success');
        this.router.navigate(['/auth/login']);
      }
    })


  }

}
