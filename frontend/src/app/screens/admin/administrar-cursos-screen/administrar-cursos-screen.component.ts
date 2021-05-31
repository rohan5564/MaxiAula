import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

import { Curso } from 'src/app/core/models/curso.model';
import { User } from 'src/app/core/models/user.model';
import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';

@Component({
  selector: 'app-administrar-cursos-screen',
  templateUrl: './administrar-cursos-screen.component.html',
  styleUrls: ['./administrar-cursos-screen.component.css']
})
export class AdministrarCursosScreenComponent implements OnInit {


  cursos$ : Observable<Curso[]> | undefined | null;
  usuarioActual: User | undefined;

  constructor(
    private auth: AuthService,
    private cursoP: CursoProviderService
  ) { 

    this.usuarioActual = this.auth.user;
    this.cursos$ = this.cursoP.getCursos();

  }

  ngOnInit(): void {
  }

}
