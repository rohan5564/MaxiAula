import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Curso, Notas } from 'src/app/core/models/curso.model';

import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';
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

  editarNotas(notas: Notas){
  
    console.log(notas);
  }

}
