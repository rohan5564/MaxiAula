import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';

import { Curso, Recurso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { User } from 'src/app/core/models/user.model';
import { PopupService } from 'src/app/core/services/popup/popup.service';
import { MailService } from '../../../core/services/mail/mail.service';

@Component({
  selector: 'app-agregar-material-component',
  templateUrl: './agregar-material.component.html',
  styleUrls: ['./agregar-material.component.css']
})
export class AgregarMaterialComponent implements OnInit {

  @Input()
  cursoActual: Curso | undefined;
  @Input()
  usuarioActual: User | undefined;

  videoForm = this.fb.group({
      link: ['',[Validators.required]]
    }
  );

  imageForm = this.fb.group({
    link: ['',[Validators.required]]
    }
  );



  constructor(
    private _sanitizer: DomSanitizer,
    private cursoP: CursoProviderService,
    private fb: FormBuilder,
    private popUp: PopupService,
    private mail: MailService
  ) { 

  }

  ngOnInit(): void {

  }

  campoNoValido( campo: string ) {
    return this.videoForm.get(campo)?.invalid
            && this.videoForm.get(campo)?.touched;
  }

  campoNoValido2( campo: string ) {
    return this.imageForm.get(campo)?.invalid
            && this.imageForm.get(campo)?.touched;
  }

  getVideoIframe(url: string) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
  }

  getAudioIframe(url: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  async submitVideo() {

    let recurso: Recurso = {
      _id: this.cursoActual!._id,
      videoURL: this.videoForm.controls['link'].value
    }
    this.popUp.pregunta('¿Quiere añadir este video?','Añadir video al curso','question')
    .then(async (result) => {
      if (result.isConfirmed) {

        try {
          this.cursoActual?.recursos?.push(recurso);

          await this.cursoP.updateCursoById(this.cursoActual!._id, this.cursoActual!).toPromise();
          this.popUp.aviso('Felicidades!','El video  ha sido añadido exitosamente!','success');
          this.videoForm.reset();
          await this.mail.avisarNuevoContenido(this.cursoActual!.nombre, this.usuarioActual!.nombre, this.cursoActual!.participantes);   
                 
        }
        catch(error){
          this.popUp.aviso('Error!','Algo falló','error');
          console.log('fallo :c', error);
        }
      }
    })

    
  
 
  }

  submitImagen() {
    let recurso: Recurso = {
      _id: this.cursoActual!._id,
      videoURL: this.imageForm.controls['link'].value
    }
    this.popUp.pregunta('¿Quiere añadir esta imagen?','Añadir imagen al curso','question')
    .then(async (result) => {
      if (result.isConfirmed) {

        try {
          this.cursoActual?.recursos?.push(recurso);

          await this.cursoP.updateCursoById(this.cursoActual!._id, this.cursoActual!).toPromise();
          this.popUp.aviso('Felicidades!','La imagen  ha sido añadido exitosamente!','success');
          this.imageForm.reset();   
          await this.mail.avisarNuevoContenido(this.cursoActual!.nombre, this.usuarioActual!.nombre, this.cursoActual!.participantes); 
                
        }
        catch(error){
          this.popUp.aviso('Error!','Algo falló','error');
          console.log('fallo :c', error);
        }
      }
    })
  }
}
