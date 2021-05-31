import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../../auth/services/auth.service';
import { CursoProviderService } from '../../../core/providers/curso/curso-provider.service';
import { Curso } from 'src/app/core/models/curso.model';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-administrar-cursos',
  templateUrl: './administrar-cursos.component.html',
  styleUrls: ['./administrar-cursos.component.css']
})
export class AdministrarCursosComponent implements OnInit {


  cursosProfe$ : Observable<Curso[]> | undefined | null;
  usuarioActual: User | undefined;
  
  constructor(
    private auth: AuthService,
    private cursoP: CursoProviderService
  ) { 
     this.usuarioActual = this.auth.user;
     this.cursosProfe$ = this.cursoP.getCursosProf(this.usuarioActual.rut);
  }

  ngOnInit(): void {
  }

}
