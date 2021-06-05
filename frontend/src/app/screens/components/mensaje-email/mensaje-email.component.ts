import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Curso } from 'src/app/core/models/curso.model';
import { Mail } from 'src/app/core/models/mail.model';
import { User } from 'src/app/core/models/user.model';
import { MailService } from '../../../core/services/mail/mail.service';
import { PopupService } from '../../../core/services/popup/popup.service';
import { UserProviderService } from '../../../core/providers/user/user-provider.service';

@Component({
  selector: 'app-mensaje-email',
  templateUrl: './mensaje-email.component.html',
  styleUrls: ['./mensaje-email.component.css']
})
export class MensajeEmailComponent implements OnInit {

  @Input()
  usuarioActual: User | undefined;
  @Input()
  cursoActual: Curso | undefined;

  mensajeForm = this.fb.group({
     asunto: ['', [Validators.required]],
     destinatario: ['',],
     cuerpo: ['', [Validators.required]]
  });

  constructor(
    private mail: MailService,
    private popUp: PopupService,
    private fb: FormBuilder,
    private userP: UserProviderService
  ) {

   }

   campoNoValido( campo: string ) {
    return this.mensajeForm.get(campo)?.invalid
            && this.mensajeForm.get(campo)?.touched;
  }

  ngOnInit(): void {
  }

  async onSubmitMensaje(){
    if ( this.mensajeForm.invalid )  {
      this.mensajeForm.markAllAsTouched();
      return;
    }

    let mail: Mail; // variable con interface mail para enviar los mail
    if (this.usuarioActual?.tipo === 2 && this.cursoActual) {

      this.popUp.pregunta('¿Quiere enviar este mensaje?','Se le enviará el mensaje a todos los participantes del curso','question')
      .then( async (result) => {
          if (result.isConfirmed) {

            for (let participante of this.cursoActual!.participantes) { // recorrer los participantes del curso
              
              let user = await this.userP.getUsuarioByRUT(participante).toPromise(); // obtener el usuario de ese curso para extraer su correo

              mail = {
                asunto: this.cursoActual!.nombre.toLocaleUpperCase() + ' - ' +  this.usuarioActual!.nombre.toLocaleUpperCase() + ' - ' + this.mensajeForm.controls['asunto'].value,
                destinatario: user!.correo,
                cuerpo: this.mensajeForm.controls['cuerpo'].value
              }
             // console.log(mail)
              await this.mail.sendMessage(mail).toPromise();
      
            }
            this.popUp.aviso('Se han enviado los mensajes', 'Se enviaron correctamente los mensajes','success');
            this.mensajeForm.reset();
          }
         

      })       
    } else {

      this.popUp.pregunta('¿Quiere enviar este mensaje?','Se enviara su mensaje','question')
      .then( async (result) => {
          if (result.isConfirmed) {
            
            mail = {
              asunto: this.mensajeForm.controls['asunto'].value,
              destinatario: this.mensajeForm.controls['destinatario'].value,
              cuerpo: this.mensajeForm.controls['cuerpo'].value
            }
            await this.mail.sendMessage(mail).toPromise();
            this.popUp.aviso('Se ha enviado su mensaje', 'Se enviado correctamente su mensaje','success');
            
          }
          
      });
  
    }

  }

}
