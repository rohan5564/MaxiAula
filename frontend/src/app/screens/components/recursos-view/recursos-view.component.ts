import { Component, Input, OnInit } from '@angular/core';
import { Curso, Recurso } from 'src/app/core/models/curso.model';

import { AuthService } from '../../../auth/services/auth.service';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PopupService } from '../../../core/services/popup/popup.service';

@Component({
  selector: 'app-recursos-view',
  templateUrl: './recursos-view.component.html',
  styleUrls: ['./recursos-view.component.css']
})
export class RecursosViewComponent implements OnInit {


  @Input()
  recursos: Recurso[] | undefined;
  @Input()
  cursoActualID: string | undefined;

  usuarioActual = this.auth.user;


  constructor(
    private _sanitizer: DomSanitizer,
    private auth: AuthService,
    private popUp: PopupService,
    private cursoP: CursoProviderService
    ) { }

  ngOnInit(): void {
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

  async borrarRecurso(recurso: Recurso) {

   //console.log(recurso)

    this.popUp.pregunta('¿Quiere eliminar este recurso?', 'El recurso se va a borrar de forma permanente','question')
    .then(
      async result => {
        if (result.isConfirmed) {

          this.recursos!.forEach( (item, index) => { // borrar del arreglo de recursos
            if(item === recurso) this.recursos!.splice(index,1);
          });

          let cursoPartial: Partial<Curso> = {
              recursos: this.recursos
          }
          await this.cursoP.updateCursoById(this.cursoActualID!, cursoPartial).toPromise();
          this.popUp.aviso('Se ha eliminado el recurso','Se eliminó correctamente el recurso','success');
        }

      });

  }

}
