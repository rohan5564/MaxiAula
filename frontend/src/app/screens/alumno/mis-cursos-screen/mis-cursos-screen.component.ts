import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';

@Component({
  selector: 'app-mis-cursos-screen',
  templateUrl: './mis-cursos-screen.component.html',
  styleUrls: ['./mis-cursos-screen.component.css']
})
export class MisCursosScreenComponent implements OnInit {

  cursosAlu = this.cursosP.getCursosAlu(this.auth.user.rut!);
  cursos: Curso[] | undefined;

  constructor(private cursosP: CursoProviderService, private auth: AuthService) { 
    this.cursosAlu.subscribe(
      cursos => {
        console.log(cursos);
        this.cursos = cursos;
      }
    )
  }

  ngOnInit(): void {
  }

}
