import { Component, OnInit } from '@angular/core';
import { Curso, Notas } from 'src/app/core/models/curso.model';

import { AuthService } from '../../../auth/services/auth.service';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mis-notas-screen',
  templateUrl: './mis-notas-screen.component.html',
  styleUrls: ['./mis-notas-screen.component.css']
})
export class MisNotasScreenComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  rut = '';
  
  /*
  cursos: Curso[] | undefined;
  notas: any;
  notasNumber: any;
  curso:any;
  */
  constructor(
    public  auth: AuthService
  ) { 
    
   // this.cursosAlu.subscribe(
    //  cursos => {
       
     //   this.cursos = cursos;
        
         /*
         cursos.map(
          (curso) => {
           // this.notas= curso.notas;
           this.notas = curso.notas!.map( (notas) =>
            {
              console.log(this.notas)
              if (notas.rutAlumno === this.rut) {
                
                //this.notas?.concat (notas);
                //this.notas?.push(notas)
                return notas;
              }
              return null
            } )
            
            



            this.notas = this.notas.filter(Boolean);
            console.log(this.notas)

            this.notasNumber = this.notas.map(
              (notas:any) => {
                return notas.notas}
            )
            this.notasNumber = this.notasNumber.filter(Boolean);
            console.log(this.notasNumber)

          }
          
        )
         */

    //  }
    //)
    

 
    
  }
  
  ngOnInit(): void {
    this.rut = this.auth.user.rut;
  }
}
