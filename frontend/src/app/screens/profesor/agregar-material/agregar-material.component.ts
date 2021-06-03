import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-agregar-material',
  templateUrl: './agregar-material.component.html',
  styleUrls: ['./agregar-material.component.css']
})
export class AgregarMaterialComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';


  curso: Curso | undefined;
  usuarioActual = this.auth.user;

  constructor(
    private cursoP: CursoProviderService,
    private activatedRoute: ActivatedRoute,
    private auth : AuthService
  ) { 

  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.cursoP.getCursoByID(id) )
    )
    .subscribe( (curso) => this.curso = curso );
  }

}
