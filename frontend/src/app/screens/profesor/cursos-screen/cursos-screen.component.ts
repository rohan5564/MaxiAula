import { Component, OnDestroy, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { AuthService } from '../../../auth/services/auth.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos-screen',
  templateUrl: './cursos-screen.component.html',
  styleUrls: ['./cursos-screen.component.css']
})
export class CursosScreenComponent implements OnInit, OnDestroy {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  cursosProfe$ = this.cursosP.getCursosProf(this.auth.user.rut!);
  cursos: Curso[] | undefined;
  constructor(
    private cursosP: CursoProviderService, 
    private auth: AuthService) {

   this.sus = this.cursosProfe$.subscribe(
      cursos => {
        console.log(cursos);
        this.cursos = cursos;
      }      
    )

    
   }

   sus:Subscription;
  ngOnInit(): void {
    //console.log('entrando a cursos');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
    this.sus.unsubscribe();
    //console.log('cursos componente destuido');
  }
}
