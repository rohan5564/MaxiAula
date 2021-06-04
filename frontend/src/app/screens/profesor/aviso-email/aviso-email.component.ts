import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';

@Component({
  selector: 'app-aviso-email',
  templateUrl: './aviso-email.component.html',
  styleUrls: ['./aviso-email.component.css']
})
export class AvisoEmailComponent implements OnInit {

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  usuarioActual = this.auth.user;
  cursosProfe$ = this.cursosP.getCursosProf(this.usuarioActual.rut!);

  cursos: Curso[] | undefined;

  cursoControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);


  constructor(
    private cursosP: CursoProviderService, 
    private auth: AuthService) {

    this.cursosProfe$.subscribe(
        cursos => {
        // console.log(cursos);
          this.cursos = cursos;
        }      
      )

    
   }

  ngOnInit(): void {
    
  }

}
