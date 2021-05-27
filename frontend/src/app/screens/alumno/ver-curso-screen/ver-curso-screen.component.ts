import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';

@Component({
  selector: 'app-ver-curso-screen',
  templateUrl: './ver-curso-screen.component.html',
  styleUrls: ['./ver-curso-screen.component.css']
})
export class VerCursoScreenComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoP: CursoProviderService
  ) {
    
   }
  
  curso!: Curso;
  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.cursoP.getCursoByID(id) )
    )
    .subscribe( (curso) => this.curso = curso );
  }

}
