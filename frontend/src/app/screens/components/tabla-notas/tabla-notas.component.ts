import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Curso, Notas } from 'src/app/core/models/curso.model';

import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';
import { DialogNotasComponent } from '../dialog-notas/dialog-notas.component';
import { MatDialog } from '@angular/material/dialog';
import { PopupService } from 'src/app/core/services/popup/popup.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Table } from 'primeng/table';
import { ThemePalette } from '@angular/material/core';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';

@Component({
  selector: 'app-tabla-notas',
  templateUrl: './tabla-notas.component.html',
  styleUrls: ['./tabla-notas.component.css']
})
export class TablaNotasComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  @Input()
  usuarioActual: User | undefined;
  @Input()
  usuarios: any;
  @Input()
  cursoActual: Curso | undefined;

  notas: Notas[] | undefined;


  constructor(
    private userP: UserProviderService,
    private cursoP: CursoProviderService,
    private popUp : PopupService,
    public dialog: MatDialog
  ) {
 
  }

  ngOnInit(): void {
     this.notas = this.cursoActual?.notas;
  }

  // obtener la tabla de primeng del html 
  @ViewChild('dt') dt: Table | undefined;
  // filtro para el buscador de una columna
  applyFilter($event: any, stringVal: any) {
    this.dt!.filter(($event.target as HTMLInputElement).value, stringVal,  'contains');
  }

  notaNueva = 0;
  async editarNotas(notas: Notas){
    
    const dialogRef = this.dialog.open(DialogNotasComponent, {
      width: 'auto',
      data: { notas: notas, notaNueva: this.notaNueva }
    });

    dialogRef.afterClosed().subscribe(async result => {

      if (!result) return
      
      // si se agrego una nota
      if (result.notaNueva > 0) {
        notas.notas.push(result.notaNueva);
      }
      
      if (notas.notas.length) {
        
        notas.promedio = notas.notas.reduce( (acumulado, actual) => acumulado + actual, 0) / notas.notas.length; // calcular promedio
      }

      this.popUp.pregunta('¿Desea guardar los cambios?','Se guardarán los cambio de forma permanente','question')
      .then( async resp => {
        if (resp.isConfirmed){

            await this.cursoP.updateCursoById(this.cursoActual!._id, this.cursoActual!).toPromise();
            this.popUp.aviso('Se guardaron los cambios','Los cambios en las notas del usuario se actualizaron correctamente','success');
        }
      });


      console.log(notas);

      
    });

   
  }

}
