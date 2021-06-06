import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  


  cursoActual: Curso | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoP: CursoProviderService
  ) {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.cursoP.getCursoByID(id) )
    )
    .subscribe( (curso) => {
      
        this.cursoActual = curso;      
 
    });
   }

  ngOnInit(): void {
  }

}
