import { Component, Input, OnInit } from '@angular/core';

import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';
import { PopupService } from 'src/app/core/services/popup/popup.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { SelectItem } from 'primeng/api';
import { ThemePalette } from '@angular/material/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent implements OnInit {


  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  @Input()
  usuarioActual: User | undefined;
  @Input()
  cursos: any;


  statuses : SelectItem[] = [{label: '1er Semestre', value: 1},{label: '2do Semestre', value: 2}];


  clonedCursos: { [s: string]: Curso; } = {};

  constructor(
    private cursoP: CursoProviderService,
    private popUp : PopupService
  ) { 
  
  }

  ngOnInit(): void {
  }

  onRowEditInit(curso: Curso){
    this.clonedCursos[curso._id] = {...curso};
  }

  async onRowEditSave(curso: Curso) {

    this.popUp.pregunta('Editar Curso','¿Desea editar el curso de forma permanente?','warning')
              .then(async (result) => {
                if (result.isConfirmed) {
                  try {

                    await this.cursoP.updateCursoById(curso._id, curso).toPromise();
                    this.popUp.aviso('Curso Actualizado!','Se ha actualizado correctamente el curso.','success');
                    
                  } catch (error) {
                    
                    this.popUp.aviso('Error al actualizar el curso!','No se pudo actualizar el curso','error');
            
                  }      
                }
              });

  }

  onRowEditCancel(curso:Curso, index: number) {
      this.cursos[index] = this.clonedCursos[curso._id];
      delete this.clonedCursos[curso._id];
  }

  async deleteCurso(curso: Curso, index: number){

    this.popUp.pregunta('Eliminar Curso','¿Desea eliminar este curso de forma permanente?','error')
    .then(async (result) => {
      if (result.isConfirmed) {                  
        try {

          await this.cursoP.deleteCursoById(curso._id).toPromise(); // eliminar de la base de datos
          this.popUp.aviso('Curso Eliminado','Se ha eliminado el curso correctamente','success');  

          this.cursos!.forEach( (item: Curso, index: any) => { // borrar del arreglo de cursos
            if(item === curso) this.cursos!.splice(index,1);
          });

          //delete this.cursos[index]; // eliminar de la tabla
        } catch (error) {

          this.popUp.aviso('Error al eliminar el curso!','No se pudo eliminar el curso','error');

      }
      
      }
    });

  }

}
