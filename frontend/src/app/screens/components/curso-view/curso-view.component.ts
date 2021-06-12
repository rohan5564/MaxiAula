import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-curso-view',
  templateUrl: './curso-view.component.html',
  styleUrls: ['./curso-view.component.css']
})
export class CursoViewComponent implements OnInit, OnDestroy {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoP: CursoProviderService,
    private auth: AuthService
  ) {
    
   }

   usuarioActual = this.auth.user;
  
  curso!: Curso;
  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.cursoP.getCursoByID(id) )
    )
    .subscribe( (curso) => this.curso = curso );

   // console.log('Entrando',this.usuarioActual)
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
   // console.log('destruyendo curso')
  }
}
