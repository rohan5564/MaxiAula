import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { MailService } from '../../core/services/mail/mail.service';
import { PopupService } from '../../core/services/popup/popup.service';
import { Router } from '@angular/router';
import { UserProviderService } from '../../core/providers/user/user-provider.service';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.component.html',
  styleUrls: ['./recuperar-contra.component.css']
})
export class RecuperarContraComponent implements OnInit {


  recuperarContraForm = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private popUp: PopupService,
    private fb: FormBuilder,
    private userP: UserProviderService,
    private mail: MailService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  campoEsValido( campo: string ) {

    return this.recuperarContraForm.controls[campo].errors 
            && this.recuperarContraForm.controls[campo].touched;
  }
  

  async onSubmitRecuperar() {
    if ( this.recuperarContraForm.invalid )  {
      this.recuperarContraForm.markAllAsTouched();
      return;
    }

    //console.log(this.recuperarContraForm.controls['correo'].value);
    let usuario = await this.userP.getUsuarioByEmail(this.recuperarContraForm.controls['correo'].value).toPromise();

    if (!usuario) {
      this.popUp.aviso('No existe el Usuario', 'No existe un usuario con ese correo, asegurese de que es el correo de la cuenta y que esta bien escrito','error');
      return
    }
    //console.log(usuario);

    this.auth.recuperarContra(usuario.correo).subscribe( async resp => {

      
      await this.mail.recuperarContra(usuario!, resp.token);
      this.popUp.aviso('¡Se ha enviado un email para recuperar su contraseña!', 'Para recuperar su contraseña debe cambiarla a través del link que se le envió a su correo', 'success');
      this.router.navigate(['/auth/login']);
    });

  

    

  }

}
