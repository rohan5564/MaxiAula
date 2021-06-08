import { Component, Input, OnInit } from '@angular/core';

import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { Observable } from 'rxjs';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-ver-notas',
  templateUrl: './ver-notas.component.html',
  styleUrls: ['./ver-notas.component.css']
})
export class VerNotasComponent implements OnInit {

  @Input()
  rut! :string;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  
 
  cursos: Curso[] | null | undefined;

 
 
  cursosAlu$ : Observable<Curso[]> | undefined;

  constructor(
    private cursoP: CursoProviderService
    
  ) { 
   
  }

  ngOnInit(): void {
   // console.log(this.rut)
    this.cursosAlu$ = this.cursoP.getCursosAlu(this.rut);
    this.cursosAlu$.subscribe(  cursos => this.cursos = cursos );

  }

}
