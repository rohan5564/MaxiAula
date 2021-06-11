import { Component, Input, OnInit } from '@angular/core';
import { Curso, Tarea } from 'src/app/core/models/curso.model';

import { AuthService } from 'src/app/auth/services/auth.service';
import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';
import { PopupService } from 'src/app/core/services/popup/popup.service';

@Component({
  selector: 'app-tarea-card-list',
  templateUrl: './tarea-card-list.component.html',
  styleUrls: ['./tarea-card-list.component.css']
})
export class TareaCardListComponent implements OnInit {

  @Input()
  tareas: Tarea[] | undefined;

  @Input()
  cursoActualID: string | undefined;

  usuarioActual = this.auth.user;

  constructor(
    private auth: AuthService,
    private popUp: PopupService,
    private cursoP: CursoProviderService
  ) { }

  ngOnInit(): void {
  }


  async borrarTarea(tarea: Tarea) {

    console.log(tarea)

    this.popUp.pregunta('¿Quiere eliminar esta tarea?', 'La tarea se va a borrar de forma permanente','question')
    .then(
      async result => {
        if (result.isConfirmed) {

          this.tareas!.forEach( (item, index) => { // borrar del arreglo de recursos
            if(item === tarea) this.tareas!.splice(index,1);
          });

          let cursoPartial: Partial<Curso> = {
              tareas: this.tareas
          }
          await this.cursoP.updateCursoById(this.cursoActualID!, cursoPartial).toPromise();
          this.popUp.aviso('Se ha eliminado la tarea','Se eliminó correctamente la tarea','success');
        }

      });

  }

}
