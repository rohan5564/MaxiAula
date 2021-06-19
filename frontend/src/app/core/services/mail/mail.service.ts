import { HttpService } from '../http/http.service';
import { Injectable } from '@angular/core';
import { Mail } from '../../models/mail.model';
import { User } from '../../models/user.model';
import { UserProviderService } from '../../providers/user/user-provider.service';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  
  constructor(
    private http: HttpService,
    private userP: UserProviderService
  ) { 

  }

  // enviar el email
  sendMessage (body: Mail) {

    return this.http.post<Mail>('/mail/mensaje', body);

  }

  async avisarNuevoContenido(nombreCurso: string, nombreProfe: string,participantes: string[]) {

    let mail: Mail;
    for (let participante of participantes) { // recorrer los participantes del curso
              
      let user = await this.userP.getUsuarioByRUT(participante).toPromise(); // obtener el usuario de ese curso para extraer su correo

      mail = {
        asunto: 'Se ha añadido nuevo contenido al curso de ' + nombreCurso.toLocaleUpperCase(),
        destinatario: user!.correo,
        cuerpo: 'Su curso de ' + nombreCurso + ' impartido por ' + nombreProfe.toLocaleUpperCase() + ' tiene nuevo contenido, ingresa a MaxiAula para ver mas detalles.'
      }
  
      await this.sendMessage(mail).toPromise(); // enviar el mail

    }
  }

  
  async avisarNuevaTarea(nombreCurso: string, nombreProfe: string,participantes: string[]) {

    let mail: Mail;
    for (let participante of participantes) { // recorrer los participantes del curso
              
      let user = await this.userP.getUsuarioByRUT(participante).toPromise(); // obtener el usuario de ese curso para extraer su correo

      mail = {
        asunto: 'Se ha añadido una nueva tarea al curso de ' + nombreCurso.toLocaleUpperCase(),
        destinatario: user!.correo,
        cuerpo: 'Su curso de ' + nombreCurso + ' impartido por ' + nombreProfe.toLocaleUpperCase() + ' tiene una nueva tarea, ingresa a MaxiAula para ver mas detalles.'
      }
  
      await this.sendMessage(mail).toPromise();  // enviar el mail

    }
  }

  async recuperarContra(user: User, token: string) {
    
    let mail: Mail;
    mail = {
      asunto: 'Recuperar Contraseña',
      destinatario: user.correo,
      cuerpo: 'Para recuperar su contraseña utilice el siguiente link: ' + window.location.href + '/cambiar/' + token
    }

    await this.sendMessage(mail).toPromise();
  }

}
