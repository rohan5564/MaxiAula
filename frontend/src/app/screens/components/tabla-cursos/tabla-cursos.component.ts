import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

import { Curso } from 'src/app/core/models/curso.model';
import { User } from 'src/app/core/models/user.model';
import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';
import { PopupService } from 'src/app/core/services/popup/popup.service';

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


  constructor(
    private cursoP: CursoProviderService,
    private popUp : PopupService
  ) { 
  
  }

  ngOnInit(): void {
  }

}
