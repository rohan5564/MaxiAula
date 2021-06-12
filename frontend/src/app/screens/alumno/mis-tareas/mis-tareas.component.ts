import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../auth/services/auth.service';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-mis-tareas',
  templateUrl: './mis-tareas.component.html',
  styleUrls: ['./mis-tareas.component.css']
})
export class MisTareasComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  usuarioActual = this.auth.user;
  cursosAlu$ = this.cursoP.getCursosAlu(this.usuarioActual.rut);
  cursos : Curso[] | undefined;

  constructor(
    private cursoP: CursoProviderService,
    private auth: AuthService,

  ) { }

  ngOnInit(): void {
    this.cursosAlu$.subscribe( cursos => this.cursos = cursos);
  }

}
