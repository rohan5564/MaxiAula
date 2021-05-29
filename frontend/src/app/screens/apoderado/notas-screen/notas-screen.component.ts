import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/models/curso.model';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from '../../../core/providers/user/user-provider.service';
import { AuthService } from '../../../auth/services/auth.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-notas-screen',
  templateUrl: './notas-screen.component.html',
  styleUrls: ['./notas-screen.component.css']
})
export class NotasScreenComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  hijosOBS = this.userP.getHijos(this.auth.user);
  hijos:User[] = [];
  cursosM :any; 
  cursos: any;
  //hijos: Observable<Observable<User[]>> | undefined;

  constructor(
    public userP: UserProviderService,
    public auth: AuthService,
    public cursoP: CursoProviderService
  ) {
     
    //console.log(this.hijosOBS)

    this.hijosOBS.subscribe(
      hijos => {
        this.hijos = hijos;
        console.log(this.hijos)
    
      }
      
    )
     /*
      this.auth.user.hijos?.forEach(
        hijo => {
            this.hijos?.subscribe(
            hijos =>   {
              hijos = this.userP.getUsuarioByRUT(hijo)
              }
            )
            let cursos = cursoP.getCursosAlu(hijo);
            cursos.subscribe(
              cursos => { this.cursos = cursos}
            )
            console.log(cursos)
        }
      )
      */
   }

   /*
   getCursos(user: User): Curso[]{
     let cursos = this.cursoP.getCursosAlu(user.rut);
     let cursos1;
      cursos.subscribe(
        cursos => {
          cursos1 = cursos;
        }
      )
     return cursos1;
   }
   */

  ngOnInit(): void {
    
    
    
  }

}
