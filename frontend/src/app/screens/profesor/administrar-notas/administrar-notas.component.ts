import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Curso } from 'src/app/core/models/curso.model';
import { CursoProviderService } from 'src/app/core/providers/curso/curso-provider.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-administrar-notas',
  templateUrl: './administrar-notas.component.html',
  styleUrls: ['./administrar-notas.component.css']
})
export class AdministrarNotasComponent implements OnInit {

  participantes$: Observable<User[]> | undefined;

  curso: Curso | undefined;

  usuarioActual = this.auth.user;

  constructor(
    private userP: UserProviderService,
    private auth: AuthService,
    private cursoP: CursoProviderService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.cursoP.getCursoByID(id) )
    )
    .subscribe( (curso) => {
        this.curso = curso;
        //this.participantes = curso.participantes;
        
        this.participantes$ = this.userP.getParticipantes(curso.participantes);
        //console.log(this.curso!.participantes)
    });
    
   }

  ngOnInit(): void {
  }

}
